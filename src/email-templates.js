// 더나함 K-Food 바이어 이메일 자동생성
// 형식: 영문 ~700자 → "* 아래에" 구분선 → 국문 ~700자
// 시나리오: cold_outreach / negotiation / complaint

export function generateEmail({ scenario, buyerName, companyName, context }) {
  const name = buyerName || "Buyer";
  const company = companyName || "your company";
  const ctx = context || "";

  let en = "";
  let kr = "";

  if (scenario === "cold_outreach") {
    en = `Dear ${name},

I hope this message finds you well. My name is Max Jung, General Sales Manager at TradeOn Co., Ltd., representing the NAHAM (더나함) brand — Premium Korean Wellness Foods.

We recently exhibited at Seoul Food 2026 and noticed ${company}'s strong presence in the gift & wellness food category. Our signature Baengnyeon Jin-go (6-year red ginseng extract, 13.5% concentrate) and pure Korean honey are produced with 100% Korean ingredients, gift-grade packaging, and export-ready shelf life.

Would you be open to a brief 15-20 minute call next week to explore a potential partnership? I'd be happy to send our full export brochure and samples ahead of the call.

Best regards,
Max Jung
General Sales Manager, TradeOn Co., Ltd. (NAHAM / 더나함)
Email: thenahammax@gmail.com
linktr.ee/tradeonmax`;

    kr = `${company} ${name}님께,

안녕하세요. 트레이드온 주식회사 영업본부장 정성열입니다. 저희는 더나함(NAHAM) 브랜드로 프리미엄 한국 건강식품을 전문으로 제조·수출하고 있습니다.

최근 서울푸드 2026에 참가하면서 ${company}의 선물/웰니스 식품 부문 경쟁력을 눈여겨보았습니다. 저희 대표 제품인 백년진고(6년근 홍삼 13.5% 농축)와 순수 국내산 꿀은 100% 국산 원료, 선물용 고급 패키징, 수출에 적합한 장기 보존성을 갖추고 있습니다.

다음 주 중 15~20분 정도 짧은 미팅이나 콜이 가능하실까요? 원하시면 미팅 전 전체 수출 브로셔와 샘플도 보내드릴 수 있습니다.

감사합니다.
정성열 (Max)
트레이드온 주식회사 영업본부장 / 더나함(NAHAM)
Email: thenahammax@gmail.com
linktr.ee/tradeonmax`;
  } else if (scenario === "negotiation") {
    en = `Dear ${name},

Thank you for your continued interest in NAHAM products. As discussed previously${ctx ? ` regarding ${ctx}` : ""}, I'd like to follow up with a concrete proposal.

Based on the order volume we discussed, we can offer a 5% reduction from our standard price, reflecting the increased production volume and reduced per-unit logistics cost. This offer is contingent on a minimum order per SKU as outlined in our spec sheet.

For scheduling, here are a few options for our next call:
- Tuesday 10:00 AM KST
- Wednesday 3:00 PM KST
- Thursday 9:00 AM KST

Please let me know which works best, and I'll send over the formal quotation accordingly.

Best regards,
Max Jung
TradeOn Co., Ltd. (NAHAM / 더나함)
Email: thenahammax@gmail.com`;

    kr = `${company} ${name}님께,

더나함(NAHAM) 제품에 지속적인 관심을 가져주셔서 감사합니다. 지난번 말씀하신 ${ctx || "조건"}에 대해 구체적인 제안을 드립니다.

논의된 주문 규모를 기준으로, 생산량 증가와 단위당 물류비 절감을 반영하여 표준가 대비 5% 할인을 제공할 수 있습니다. 단, 이 조건은 스펙시트에 명시된 SKU별 최소 주문량을 전제로 합니다.

다음 미팅 일정은 아래 중 편한 시간으로 알려주세요:
- 화요일 오전 10시 (KST)
- 수요일 오후 3시 (KST)
- 목요일 오전 9시 (KST)

일정 확정해주시면 정식 견적서를 바로 발송드리겠습니다.

감사합니다.
정성열 (Max)
트레이드온 주식회사 / 더나함(NAHAM)
Email: thenahammax@gmail.com`;
  } else if (scenario === "complaint") {
    en = `Dear ${name},

Thank you for bringing this to our attention, and I apologize for the inconvenience this has caused${ctx ? ` regarding ${ctx}` : ""}.

We are reviewing the matter with our logistics and production teams to confirm the root cause. We will provide a detailed update with a resolution plan within 3 business days.

To prevent recurrence, we are also reviewing our quality control checkpoints for this product line. We value our partnership with ${company} and are committed to resolving this promptly.

Best regards,
Max Jung
TradeOn Co., Ltd. (NAHAM / 더나함)
Email: thenahammax@gmail.com`;

    kr = `${company} ${name}님께,

${ctx ? `${ctx} 관련하여 ` : ""}불편을 드려 죄송합니다. 알려주셔서 감사합니다.

현재 물류 및 생산 부서와 함께 원인을 확인하고 있으며, 영업일 기준 3일 내 구체적인 해결 방안을 회신드리겠습니다.

재발 방지를 위해 해당 제품군의 품질관리 체크포인트도 함께 점검하고 있습니다. ${company}와의 협력 관계를 중요하게 생각하며, 신속히 해결하겠습니다.

감사합니다.
정성열 (Max)
트레이드온 주식회사 / 더나함(NAHAM)
Email: thenahammax@gmail.com`;
  } else {
    throw new Error(`Unknown scenario: ${scenario}`);
  }

  return `${en}\n\n* 아래에\n\n${kr}`;
}
