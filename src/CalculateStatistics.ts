import Transaction from "./types/Transaction";

function calculateTotal(transactions: Transaction[]): number {
  return transactions.reduce((previous, transaction) => {
    return previous + transaction.valor;
  }, 0);
}

function calculateCreditCard(transactions: Transaction[]): number {
  return transactions.reduce((previous, transaction) => {
    if (transaction.formaPagamento === "Cartão de Crédito") {
      return previous + 1;
    } else {
      return previous;
    }
  }, 0);
}

function calculateBillet(transactions: Transaction[]): number {
  return transactions.reduce((previous, transaction) => {
    if (transaction.formaPagamento === "Boleto") {
      return previous + 1;
    } else {
      return previous;
    }
  }, 0);
}

function calculateStatistics(transactions: Transaction[]): Statistics {
  return {
    total: calculateTotal(transactions),
    creditCard: calculateCreditCard(transactions),
    billet: calculateBillet(transactions),
    paid: 0,
    refusedByCreditCard: 0,
    awaitingPayment: 0,
    reversed: 0,
    bestSellDay: 0,
  };
}

export default calculateStatistics;
