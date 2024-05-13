interface Transaction {
  id: number;
  status: string;
  data: string;
  nome: string;
  email: string;
  formaPagamento: string;
  valor: number;
  isClienteNovo: boolean;
}

export default Transaction;
