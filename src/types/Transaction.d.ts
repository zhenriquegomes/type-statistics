interface Transaction {
  id: number;
  status: keyof PaymentStatus;
  date: Date;
  name: string;
  email: string;
  paymentMethod: keyof FormOfPayment;
  value: number;
  isNewClient: boolean;
}

export default Transaction;
