import Transaction from "./types/Transaction";

function calculateTotal(transactions: Transaction[]): number {
  return transactions.reduce((previous, transaction) => {
    return previous + transaction.valor;
  }, 0);
}

function calculateByFilter<T>(
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

function calculateStatistics(transactions: Transaction[]): Statistics {
  return {
    total: calculateTotal(transactions),
    creditCard: calculateByFilter<keyof FormOfPayment>(
      transactions,
      "formaPagamento",
      "Cartão de Crédito"
    ),
    billet: calculateByFilter<keyof FormOfPayment>(
      transactions,
      "formaPagamento",
      "Boleto"
    ),
    paid: calculateByFilter<keyof PaymentStatus>(
      transactions,
      "status",
      "Paga"
    ),
    refusedByCreditCard: calculateByFilter<keyof PaymentStatus>(
      transactions,
      "status",
      "Recusada pela operadora de cartão"
    ),
    awaitingPayment: calculateByFilter<keyof PaymentStatus>(
      transactions,
      "status",
      "Aguardando pagamento"
    ),
    reversed: calculateByFilter<keyof PaymentStatus>(
      transactions,
      "status",
      "Estornada"
    ),
    bestSellDay: 0,
  };
}

export default calculateStatistics;
