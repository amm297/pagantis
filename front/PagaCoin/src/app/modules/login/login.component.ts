import { Component, OnInit } from '@angular/core';
import {AppRoutes} from '../../app-routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userRoute = [AppRoutes.USERS];

  constructor() { }

  ngOnInit() {
  }

}
