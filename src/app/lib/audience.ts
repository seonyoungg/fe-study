import { StatementProps } from '@/type/audience';

// 청구서를 출력하는 함수
function statement({ invoice, plays }: StatementProps): string {
  let totalAmount = 0; // 총 금액
  let volumeCredits = 0; // 적립 포인트
  let result = `청구 내역 (고객명 : ${invoice.customer})\n`; // 결과 문자열 시작 부분

  // 금액을 달러 통화 형식으로 변환하는 포맷터
  const format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format;

  // 함수 추출하기 (공연금액)
  function amountFor(perf, play) {
    let result = 0; // 이번 공연 금액

    // 장르별 금액 계산
    switch (play.type) {
      case 'tragedy': // 비극
        result = 40000; // 기본 40,000
        if (perf.audience > 30) {
          // 관객이 30명 초과 시 초과 × 1,000
          result += 1000 * (perf.audience - 30);
        }
        break;
      case 'comedy': // 희극
        result = 30000; // 기본 30,000
        if (perf.audience > 20) {
          // 20명 초과 시 추가금
          result += 1000 + 500 * (perf.audience - 20);
        }
        // 희극은 관객 수 × 300 추가
        result += 300 * perf.audience;
        break;
      default:
        throw new Error(`알 수 없는 장르: ${play.type}`);
    }

    return result;
  }

  // 고객이 본 공연들을 순회하면서 처리
  for (let perf of invoice.performances) {
    const play = plays[perf.playID]; // 공연 ID로 공연 정보 찾기
    let thisAmount = amountFor(perf, play);

    // 적립 포인트 계산 (모든 장르 공통)
    volumeCredits += Math.max(perf.audience - 30, 0);
    // 희극이면 5명당 1점 추가
    if (play.type === 'comedy') {
      volumeCredits += Math.floor(perf.audience / 5);
    }

    // 이번 공연 내역 추가
    result += ` ${play.name}: ${format(thisAmount / 100)} (${perf.audience}석)\n`;
    // 총액에 이번 공연 금액 누적
    totalAmount += thisAmount;
  }

  // 청구 총액과 적립 포인트 추가
  result += `총액: ${format(totalAmount / 100)}\n`;
  result += `적립 포인트: ${volumeCredits}점\n`;

  return result; // 최종 문자열 반환
}
