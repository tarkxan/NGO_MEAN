import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './User';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string;
  constructor(private httpclient: HttpClient) { }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server Error');
  }

  getUser(id: string): Observable<IUser[]> {
    this.url = 'http://localhost:3000/api/users/';
    return this.httpclient.get<IUser[]>(this.url + id.toString());
  }

  updateUser(id: string,
             data) {
    this.url = 'http://localhost:3000/api/users/';
    return this.httpclient.put(this.url + id.toString(), data);
  }
}
