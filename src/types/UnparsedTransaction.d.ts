interface UnparsedTransaction {
  ID: number;
  Status: keyof PaymentStatus;
  Data: string;
  Nome: string;
  Email: string;
  ["Forma de Pagamento"]: keyof FormOfPayment;
  ["Valor (R$)"]: string;
  ["Cliente Novo"]: number;
}

export default UnparsedTransaction;
