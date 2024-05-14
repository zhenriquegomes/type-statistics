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

function parseTransaction(
  unparsedTransaction: UnparsedTransaction
): Transaction {
  return {
    id: unparsedTransaction.ID,
    status: unparsedTransaction.Status,
    data: unparsedTransaction.Data,
    nome: unparsedTransaction.Nome,
    email: unparsedTransaction.Email,
    formaPagamento: unparsedTransaction["Forma de Pagamento"],
    valor: parseNumber(unparsedTransaction["Valor (R$)"]),
    isClienteNovo: unparsedTransaction["Cliente Novo"] ? true : false,
  };
}

export default parseTransaction;
