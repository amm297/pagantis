import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WalletRestService } from '../../../../services/wallet-rest.service';
import { User } from '../../../../domain/user';
import { Wallet } from '../../../../domain/wallet';
import { SelectedWallet } from '../../../../domain/selected-wallet';

@Component({
  selector: 'app-transaction-user',
  templateUrl: './transaction-user.component.html',
  styleUrls: ['./transaction-user.component.css']
})
export class TransactionUserComponent implements OnInit {

  private _users: Array<User>;
  private _user: User;
  private _userName: string;
  private _userWallet: Wallet;
  private _userWalletName: any;

  @Output() selectWalletEvent: EventEmitter<SelectedWallet> = new EventEmitter<SelectedWallet>();

  constructor(private _walletService: WalletRestService) { }

  ngOnInit() {
    this.init();
  }

  private init() {
    this._user = null;
    this._userName = null;
    this._userWallet = null;
    this._userWalletName = null;
  }

  @Input()
  set initValue(value: any){
    this.init();
  }

  @Input()
  set users(value: Array<User>) {
    this._users = value;
  }

  get users(): Array<User> {
    return this._users;
  }

  selectUser(event: User) {
    this._user = this._users.find(it => it.name === event);
    this._userName = this._user.name;
    this._walletService.wallets(this._user.id).subscribe(data => this._user.wallets = data);
  }

  get userName(): string {
    return this._userName;
  }

  get user(): User {
    return this._user;
  }

  selectWallet(event) {
    this._userWallet = this._user.wallets.find(it => it.hash === event);
    this._userWalletName = this._userWallet.hash;
    this.selectWalletEvent.emit(new SelectedWallet({ userId: this._user.id, walletId: this._userWalletName } as SelectedWallet));
  }

  get userWalleName(): any {
    return this._userWalletName;
  }

  get userWallet(): Wallet {
    return this._userWallet;
  }

}
