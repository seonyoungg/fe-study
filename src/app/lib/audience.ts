import { StatementProps, Performance, Play } from '@/type/audience';

// 청구서를 출력하는 함수
export function statement({ invoice, plays }: StatementProps): string {
  let result = `청구 내역 (고객명 : ${invoice.customer})\n`;

  for (let perf of invoice.performances) {
    result += ` ${playFor(perf).name}: ${usd(amountFor(perf))} (${perf.audience}석)\n`;
  }

  result += `총액: ${usd(totalAmount())}\n`;
  result += `적립 포인트: ${totalVolumeCredits()}점\n`;

  function totalAmount(): number {
    let result = 0;
    for (let perf of invoice.performances) {
      result += amountFor(perf);
    }
    return result;
  }

  function totalVolumeCredits(): number {
    let volumeCredits = 0;
    for (let perf of invoice.performances) {
      volumeCredits += volumeCreditsFor(perf);
    }
    return volumeCredits;
  }

  // 공연 금액 계산
  function amountFor(aPerformance: Performance): number {
    let result = 0;
    const play = playFor(aPerformance);

    switch (play.type) {
      case 'tragedy':
        result = 40000;
        if (aPerformance.audience > 30) {
          result += 1000 * (aPerformance.audience - 30);
        }
        break;
      case 'comedy':
        result = 30000;
        if (aPerformance.audience > 20) {
          result += 1000 + 500 * (aPerformance.audience - 20);
        }
        result += 300 * aPerformance.audience;
        break;
      default:
        throw new Error(`알 수 없는 장르: ${play.type}`);
    }

    return result;
  }

  // 공연 정보 조회
  function playFor(aPerformance: Performance): Play {
    return plays[aPerformance.playID];
  }

  // 적립 포인트 계산
  function volumeCreditsFor(aPerformance: Performance): number {
    let result = 0;
    result += Math.max(aPerformance.audience - 30, 0);
    if (playFor(aPerformance).type === 'comedy') {
      result += Math.floor(aPerformance.audience / 5);
    }
    return result;
  }

  function usd(aNumber: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(aNumber / 100);
  }

  return result;
}
