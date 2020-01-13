import { Wallet } from './wallet';

export class User {
  id?: number;
  name?: string;
  surname?: string;
  phone?: string;
  address?: string;
  gender?: string;
  wallets?: Array<Wallet>;

  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.surname = user.surname;
    this.phone = user.phone;
    this.address = user.address;
    this.gender = user.gender;
    this.wallets = user.wallets;
  }
}
