interface Transaction {
  id: number;
  status: keyof PaymentStatus;
  data: Date;
  nome: string;
  email: string;
  formaPagamento: keyof FormOfPayment;
  valor: number;
  isClienteNovo: boolean;
}

export default Transaction;
