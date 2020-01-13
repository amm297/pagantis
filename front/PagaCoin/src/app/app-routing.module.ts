import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppRoutes} from './app-routes';


const routes: Routes = [
  { path: '', loadChildren: './modules/login/login.module#LoginModule' },
  { path: 'usuarios', loadChildren: './modules/users/users.module#UsersModule' },
  { path: 'transaccion', loadChildren: './modules/transaction/transaction.module#TransactionModule' }
];

@NgModule ({
    imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule]
})
export class RoutingModule {

}
