import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction.component';
import {TransactionRoutingModule } from './transaction-routing.module';
import { TranslateModule} from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';



import {UserRestService} from '../../services/user-rest.service';
import {WalletRestService} from '../../services/wallet-rest.service';
import { TransactionUserComponent } from './component/transaction-user/transaction-user.component';

@NgModule({
  imports: [
    CommonModule,
    TransactionRoutingModule,
    TranslateModule,
    FormsModule
  ],
  providers: [
    UserRestService,
    WalletRestService
  ],
  declarations: [TransactionComponent, TransactionUserComponent]
})
export class TransactionModule { }
