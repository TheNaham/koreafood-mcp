#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { searchCatalog, CATALOG } from "./catalog.js";
import { generateEmail } from "./email-templates.js";
import { getTasks } from "./tasks.js";

const server = new McpServer({
  name: "koreafood-mcp",
  version: "1.0.0",
  description:
    "Danaham K-Food export assistant: catalog search, bilingual buyer email generation, and export task tracking.",
});

// Tool 1: 카탈로그 검색
server.tool(
  "search_catalog",
  "더나함(Danaham) K-Food 제품 카탈로그를 검색합니다. 홍삼/한방 건강식품 정보, 인증, 타겟 시장, MOQ를 확인할 수 있습니다.",
  {
    query: z
      .string()
      .optional()
      .describe("검색어 (제품명, 카테고리, 시장 등). 비워두면 전체 목록 반환"),
  },
  async ({ query }) => {
    const results = searchCatalog(query);
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(results, null, 2),
        },
      ],
    };
  }
);

// Tool 2: 바이어 이메일 생성
server.tool(
  "generate_buyer_email",
  "더나함 형식 가이드라인(영문 700자 + '* 아래에' 구분선 + 국문 700자)에 맞춰 바이어 이메일을 생성합니다. 시나리오: cold_outreach(콜드 아웃리치), negotiation(협의 진행 중), complaint(컴플레인 대응)",
  {
    scenario: z
      .enum(["cold_outreach", "negotiation", "complaint"])
      .describe("이메일 시나리오 유형"),
    buyer_name: z.string().describe("바이어 담당자 이름"),
    company_name: z.string().describe("바이어 회사명"),
    context: z
      .string()
      .optional()
      .describe(
        "추가 컨텍스트 (negotiation: 직전 논의 내용 / complaint: 문제 상황 설명)"
      ),
  },
  async ({ scenario, buyer_name, company_name, context }) => {
    const email = generateEmail({
      scenario,
      buyerName: buyer_name,
      companyName: company_name,
      context,
    });
    return {
      content: [{ type: "text", text: email }],
    };
  }
);

// Tool 3: 수출 태스크 트래커
server.tool(
  "get_export_tasks",
  "더나함 K-Food 수출 프로젝트의 진행 중인 태스크 목록을 조회합니다.",
  {
    filter: z
      .string()
      .optional()
      .describe("필터 키워드 (담당자, 카테고리, 상태 등). 비워두면 전체 반환"),
  },
  async ({ filter }) => {
    const tasks = getTasks(filter);
    return {
      content: [{ type: "text", text: JSON.stringify(tasks, null, 2) }],
    };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
// v1.0.1 - trigger publish
