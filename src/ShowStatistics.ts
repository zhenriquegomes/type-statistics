export function showStatistics(statistics: Statistics) {
  const total = document.querySelector<HTMLParagraphElement>("#total");
  if (total) {
    total.innerText = `Total: R$ ${statistics.total}`;
  }
  const paymentMethods = document.querySelector<HTMLDivElement>("#pagamento");
  if (paymentMethods) {
    paymentMethods.innerHTML += `<p>Billet: ${statistics.billet}</p>`;
    paymentMethods.innerHTML += `<p>Credit card: ${statistics.creditCard}</p>`;
  }
  const status = document.querySelector<HTMLDivElement>("#status");
  if (status) {
    status.innerHTML += `<p>Paid: ${statistics.paid}</p>`;
    status.innerHTML += `<p>Awaiting Payment: ${statistics.awaitingPayment}</p>`;
    status.innerHTML += `<p>Refused by credit card: ${statistics.refusedByCreditCard}</p>`;
    status.innerHTML += `<p>Reversed: ${statistics.reversed}</p>`;
    status.innerHTML += `<p>Best sales day: ${statistics.bestSellDay}</p>`;
  }
}
