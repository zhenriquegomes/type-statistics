interface UnparsedTransaction {
  ID: number;
  Status: string;
  Data: string;
  Nome: string;
  Email: string;
  ["Forma de Pagamento"]: string;
  ["Valor (R$)"]: string;
  ["Cliente Novo"]: number;
}

export default UnparsedTransaction;
