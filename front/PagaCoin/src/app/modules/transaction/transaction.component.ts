import { Component, OnInit } from '@angular/core';

import { UserRestService } from '../../services/user-rest.service';
import { WalletRestService } from '../../services/wallet-rest.service';
import { User } from '../../domain/user';
import { TransactionRequest } from '../../domain/transaction-request';
import { SelectedWallet } from '../../domain/selected-wallet';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  private _users: Array<User>;
  private _request: TransactionRequest;
  private _errors: Array<any>;
  private _success: boolean;

  constructor(
    private _userService: UserRestService,
    private _walletService: WalletRestService
  ) {
  }

  ngOnInit() {
    this._success = false;
    this.init();
    this._userService.users().subscribe((data: Array<any>) => {
      this._users = data.map(user => {
        return new User({
          id: user.id,
          name: user.name,
          surname: user.surname,
          phone: user.phone,
          address: user.address,
          gender: user.gender,
          wallets: user.wallets
        } as User);
      });
    });
  }

  private init(): void {
    this._request = new TransactionRequest({
      from: null, to: null, amount: null
    } as TransactionRequest);
  }

  get users(): Array<User> {
    return this._users;
  }

  get request(): TransactionRequest {
    return this._request;
  }

  get errors(): any {
    return this._errors;
  }

  get success(): boolean {
    return this._success;
  }

  send() {
    if (this._request.hasValue()) {
      this._errors = null;
      this._success = false;
      this._walletService.transaction(this._request)
        .subscribe(
          data => {
            this.init();
            this._success = true;
          },
          err => { this._errors = [err]; }
        );
    } else {
      this._errors = ['transaction.wrong-value'];
    }
  }

  fromWallet(selected: SelectedWallet) {
    this._request.from = selected;
  }

  toWallet(selected: SelectedWallet) {
    this._request.to = selected;
  }
}
