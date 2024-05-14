import Transaction from "./types/Transaction";
import UnparsedTransaction from "./types/UnparsedTransaction";

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
    valor: Number(unparsedTransaction["Valor (R$)"].replace(",", ".")),
    isClienteNovo: unparsedTransaction["Cliente Novo"] ? true : false,
  };
}

export default parseTransaction;
