import { SelectedWallet } from './selected-wallet';

export class TransactionRequest {
  from: SelectedWallet;
  to: SelectedWallet;
  amount: number;

  constructor(transaction: TransactionRequest) {
    this.from = transaction.from;
    this.to = transaction.to;
    this.amount = transaction.amount;
  }

  public hasValue() {
    return this.from !== null && this.from !== undefined
      && this.to !== null && this.to !== undefined
      && this.amount !== null && this.amount !== undefined && this.amount > 0;
  }
}
