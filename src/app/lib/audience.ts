import { StatementProps } from '@/type/audience';

// 청구서를 출력하는 함수
function statement({ invoice, plays }: StatementProps): string {
  let totalAmount = 0; // 총 금액
  let volumeCredits = 0; // 적립 포인트
  let result = `청구 내역 (고객명 : ${invoice.customer})\n`; // 결과 문자열 시작 부분

  // 고객이 본 공연들을 순회하면서 처리
  // 값 누적 로직을 별도 for문으로 분리
  for (let perf of invoice.performances) {
    // 이번 공연 내역 추가
    result += ` ${playFor(perf).name}: ${usd(amountFor(perf))} (${perf.audience}석)\n`;
    // 총액에 이번 공연 금액 누적
    totalAmount += amountFor(perf);
  }

  for (let perf of invoice.performances) {
    volumeCredits += volumeCreditsFor(perf);
  }

  // 함수 추출하기 (공연금액)
  function amountFor(aPerformance) {
    let result = 0; // 이번 공연 금액

    // 장르별 금액 계산
    switch (playFor(aPerformance).type) {
      case 'tragedy': // 비극
        result = 40000; // 기본 40,000
        if (aPerformance.audience > 30) {
          // 관객이 30명 초과 시 초과 × 1,000
          result += 1000 * (aPerformance.audience - 30);
        }
        break;
      case 'comedy': // 희극
        result = 30000; // 기본 30,000
        if (aPerformance.audience > 20) {
          // 20명 초과 시 추가금
          result += 1000 + 500 * (aPerformance.audience - 20);
        }
        // 희극은 관객 수 × 300 추가
        result += 300 * aPerformance.audience;
        break;
      default:
        throw new Error(`알 수 없는 장르: ${playFor(aPerformance).type}`);
    }

    return result;
  }

  // 임시  변수를 질의함수로 바꾸기
  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  // volumeCredit 추출
  function volumeCreditsFor(aPerformance) {
    // 적립 포인트 계산 (모든 장르 공통)
    let result = 0; // 적립 포인트
    result += Math.max(aPerformance.audience - 30, 0);
    // 희극이면 5명당 1점 추가
    if (playFor(aPerformance).type === 'comedy') {
      result += Math.floor(aPerformance.audience / 5);
    }

    return result;
  }

  // format 추출
  function usd(aNumber) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(aNumber / 100);
  }

  // 청구 총액과 적립 포인트 추가
  result += `총액: ${usd(totalAmount)}\n`;
  result += `적립 포인트: ${volumeCredits}점\n`;

  return result; // 최종 문자열 반환
}
