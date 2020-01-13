import { Component, OnInit } from '@angular/core';
import { UserRestService } from '../../services/user-rest.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private _users: Array<any>;

  constructor(private _service: UserRestService) { }

  ngOnInit() {
    this._service.users()
      .subscribe(data => this._users = data);
  }

  get users(): Array<any> {
    return this._users;
  }

}
