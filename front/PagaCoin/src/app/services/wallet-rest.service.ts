import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { TransactionRequest } from '../domain/transaction-request';

@Injectable({
  providedIn: 'root'
})
export class WalletRestService {

  private _path: string;

  constructor(private _httpClient: HttpClient) {
    this._path = 'http://localhost:8080/api/wallet/';
  }

  public wallets(id): Observable<any> {
    return this._httpClient.get(this._path.concat(id));
  }

  public transaction(request: TransactionRequest): Observable<any> {
    return this._httpClient.post(this._path, request)
      .pipe(
        catchError((err: any) => {
          if (err.status === 409) {
            return throwError('transaction.balance-error');
          }
          return throwError('transaction.default-error');
        }));
  }
}
