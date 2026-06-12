// 더나함 수출 프로젝트 태스크 트래커
// 메모리에 저장된 잔여 과업 기반 초기 데이터

export const TASKS = [
  {
    id: "T-001",
    title: "서울푸드 바이어 후속 이메일 발송",
    category: "Buyer Follow-up",
    assignee: "맥스",
    deadline: "72시간 내 (Seoul Food 2026 종료 기준)",
    status: "진행중",
  },
  {
    id: "T-002",
    title: "Daniel Kim (CNR International) MOU Next Step 확정",
    category: "US/CA Partner",
    assignee: "맥스",
    deadline: "미정",
    status: "대기",
  },
  {
    id: "T-003",
    title: "Ulta Beauty Mall MOU 조건 확정 및 계약서 초안",
    category: "US Partner",
    assignee: "맥스",
    deadline: "미정",
    status: "대기",
  },
  {
    id: "T-004",
    title: "더나함 카탈로그 국내·해외 배포 확인",
    category: "Catalog",
    assignee: "김윤선 팀장",
    deadline: "미정",
    status: "대기",
  },
  {
    id: "T-005",
    title: "Hanpoom 미국 유통 채널 조건 협의 착수",
    category: "US Distribution",
    assignee: "맥스",
    deadline: "미정",
    status: "대기",
  },
];

export function getTasks(filter) {
  if (!filter) return TASKS;
  const f = filter.toLowerCase();
  return TASKS.filter((t) =>
    Object.values(t).some((v) => String(v).toLowerCase().includes(f))
  );
}
