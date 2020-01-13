import { Component, OnInit, Input } from '@angular/core';
import { WalletRestService } from '../../../../services/wallet-rest.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private _user: any;

  constructor(private _walletService: WalletRestService) { }

  ngOnInit() {
  }

  @Input()
  set user(value: any) {
    this._user = value;
  }

  get user(): any {
    return this._user;
  }

  requestWallets() {
    this._walletService.wallets(this._user.id)
      .subscribe(data => this._user.wallets = data);
  }

}
