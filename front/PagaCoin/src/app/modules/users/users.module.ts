import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserRestService } from '../../services/user-rest.service';
import { WalletRestService } from '../../services/wallet-rest.service';
import { TranslateModule } from '@ngx-translate/core';
import { UserComponent } from './components/user/user.component';
@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    TranslateModule
  ],
  providers: [
    UserRestService,
    WalletRestService
  ],
  declarations: [UsersComponent, UserComponent]
})
export class UsersModule { }
