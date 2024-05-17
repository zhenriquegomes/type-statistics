import Transaction from "./types/Transaction";
import UnparsedTransaction from "./types/UnparsedTransaction";

function parseNumber(value: string): number {
  const numberValue = Number(value.replaceAll(".", "").replace(",", "."));
  if (isNaN(numberValue)) {
    return 0;
  } else {
    return numberValue;
  }
}

function parseDate(value: string): Date {
  const [dateStr, timeStr] = value.split(" ");
  const [day, month, year] = dateStr.split("/").map(Number);
  const [hour, minute] = timeStr.split(":").map(Number);
  return new Date(year, month - 1, day, hour, minute);
}

function parseTransaction(
  unparsedTransaction: UnparsedTransaction
): Transaction {
  return {
    id: unparsedTransaction.ID,
    status: unparsedTransaction.Status,
    date: parseDate(unparsedTransaction.Data),
    name: unparsedTransaction.Nome,
    email: unparsedTransaction.Email,
    paymentMethod: unparsedTransaction["Forma de Pagamento"],
    value: parseNumber(unparsedTransaction["Valor (R$)"]),
    isNewClient: unparsedTransaction["Cliente Novo"] ? true : false,
  };
}

export default parseTransaction;
