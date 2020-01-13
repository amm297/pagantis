import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserRestService {

  private _path: string;

  constructor(private _httpClient: HttpClient) {
    this._path = 'http://localhost:8080/api/user/';
  }

  public users(): Observable<any> {
    return this._httpClient.get(this._path);
  }
}
