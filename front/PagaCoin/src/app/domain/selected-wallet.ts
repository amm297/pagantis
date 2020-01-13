export class SelectedWallet {
  userId?: number;
  walletId?: string;

  constructor(value: SelectedWallet) {
    this.userId = value.userId;
    this.walletId = value.walletId;
  }
}
