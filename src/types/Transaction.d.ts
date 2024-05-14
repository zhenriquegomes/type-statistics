interface Transaction {
  id: number;
  status: keyof PaymentStatus;
  data: string;
  nome: string;
  email: string;
  formaPagamento: keyof FormOfPayment;
  valor: number;
  isClienteNovo: boolean;
}

export default Transaction;
