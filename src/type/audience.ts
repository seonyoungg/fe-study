// 공연 데이터 타입 정의
export interface Play {
  name: string; // 공연 이름
  type: 'tragedy' | 'comedy'; // 공연 장르 (비극 or 희극)
}

// 고객이 본 공연 내역 타입
export interface Performance {
  playID: string; // 공연 ID 
  audience: number; // 관객 수
}

// 고객 청구서 타입
export interface Invoice {
  customer: string; // 고객 이름
  performances: Performance[]; // 공연 내역
}

// statement 함수 입력 타입
export interface StatementProps {
  invoice: Invoice;
  plays: Record<string, Play>; // 공연 ID → 공연 정보
}
