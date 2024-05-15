import Transaction from "./types/Transaction";

function calculateTotal(transactions: Transaction[]): number {
  return transactions.reduce((previous, transaction) => {
    return previous + transaction.valor;
  }, 0);
}

function countByFilter<T>(
  transactions: Transaction[],
  property: keyof Transaction,
  value: T
): number {
  return transactions.reduce((previous, transaction) => {
    if (transaction[property] === value) {
      return previous + 1;
    } else {
      return previous;
    }
  }, 0);
}

function getBestSalesDay(transactions: Transaction[]): string {
  const week = {
    ["Domingo"]: 0,
    ["Segunda"]: 0,
    ["Terça"]: 0,
    ["Quarta"]: 0,
    ["Quinta"]: 0,
    ["Sexta"]: 0,
    ["Sabado"]: 0,
  };
  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].data.getDay() === 0) {
      week["Domingo"] += 1;
      continue;
    }
    if (transactions[i].data.getDay() === 1) {
      week["Segunda"] += 1;
      continue;
    }
    if (transactions[i].data.getDay() === 2) {
      week["Terça"] += 1;
      continue;
    }
    if (transactions[i].data.getDay() === 3) {
      week["Quarta"] += 1;
      continue;
    }
    if (transactions[i].data.getDay() === 4) {
      week["Quinta"] += 1;
      continue;
    }
    if (transactions[i].data.getDay() === 5) {
      week["Sexta"] += 1;
      continue;
    }
    if (transactions[i].data.getDay() === 6) {
      week["Sabado"] += 1;
      continue;
    }
  }
  console.log(week);
  const [bestDay, _] = Object.entries(week).sort((a, b) => {
    return b[1] - a[1];
  })[0];
  return bestDay;
}

function calculateStatistics(transactions: Transaction[]): Statistics {
  return {
    total: calculateTotal(transactions),
    creditCard: countByFilter<keyof FormOfPayment>(
      transactions,
      "formaPagamento",
      "Cartão de Crédito"
    ),
    billet: countByFilter<keyof FormOfPayment>(
      transactions,
      "formaPagamento",
      "Boleto"
    ),
    paid: countByFilter<keyof PaymentStatus>(transactions, "status", "Paga"),
    refusedByCreditCard: countByFilter<keyof PaymentStatus>(
      transactions,
      "status",
      "Recusada pela operadora de cartão"
    ),
    awaitingPayment: countByFilter<keyof PaymentStatus>(
      transactions,
      "status",
      "Aguardando pagamento"
    ),
    reversed: countByFilter<keyof PaymentStatus>(
      transactions,
      "status",
      "Estornada"
    ),
    bestSellDay: getBestSalesDay(transactions),
  };
}

export default calculateStatistics;
