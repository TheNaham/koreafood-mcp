// 더나함(Danaham) K-Food 카탈로그 데이터
// 홍삼/한방 건강식품 중심

export const CATALOG = [
  {
    id: "DH-RG-001",
    name_kr: "더나함 6년근 홍삼정",
    name_en: "Danaham 6-Year Red Ginseng Extract",
    category: "홍삼/Red Ginseng",
    description_kr: "충청 지역 6년근 홍삼 100% 사용, 전통 공법으로 24시간 농축한 프리미엄 홍삼정",
    description_en: "Premium red ginseng extract made from 100% 6-year-old Korean red ginseng, traditionally concentrated for 24 hours",
    unit: "240g x 2병",
    moq: "500세트",
    target_markets: ["US", "Canada", "Malaysia"],
    certifications: ["HACCP", "ISO22000", "Halal(예정)"],
  },
  {
    id: "DH-RG-002",
    name_kr: "더나함 홍삼스틱",
    name_en: "Danaham Red Ginseng Stick",
    category: "홍삼/Red Ginseng",
    description_kr: "휴대가 간편한 1회용 홍삼 스틱, 출장/여행객 타겟 제품",
    description_en: "Convenient on-the-go red ginseng stick, ideal for travelers and busy professionals",
    unit: "10ml x 30포",
    moq: "1,000박스",
    target_markets: ["US", "Canada", "Malaysia"],
    certifications: ["HACCP", "ISO22000"],
  },
  {
    id: "DH-HB-001",
    name_kr: "더나함 한방 도라지배즙",
    name_en: "Danaham Herbal Bellflower Root & Pear Juice",
    category: "한방건강식품/Herbal Health Food",
    description_kr: "도라지와 배를 한방 비율로 배합한 전통 건강음료, 기관지 건강 컨셉",
    description_en: "Traditional herbal beverage blending bellflower root and pear, marketed for respiratory wellness",
    unit: "100ml x 30포",
    moq: "800박스",
    target_markets: ["US", "Malaysia"],
    certifications: ["HACCP"],
  },
  {
    id: "DH-HB-002",
    name_kr: "더나함 흑염소 진액",
    name_en: "Danaham Black Goat Extract",
    category: "한방건강식품/Herbal Health Food",
    description_kr: "전통 한방 약재와 흑염소를 장시간 달인 보양식 진액",
    description_en: "Traditional tonic extract slow-boiled with black goat and herbal ingredients for vitality support",
    unit: "80ml x 30포",
    moq: "500박스",
    target_markets: ["US", "Canada"],
    certifications: ["HACCP", "ISO22000"],
  },
];

export function searchCatalog(query) {
  if (!query) return CATALOG;
  const q = query.toLowerCase();
  return CATALOG.filter((item) =>
    Object.values(item).some((v) =>
      Array.isArray(v)
        ? v.join(" ").toLowerCase().includes(q)
        : String(v).toLowerCase().includes(q)
    )
  );
}
