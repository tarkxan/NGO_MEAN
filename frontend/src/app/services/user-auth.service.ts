import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private http: HttpClient) { }

  attemptLogin(userEmail, userPassword){
    let headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache',
      'Email' : userEmail,
      'Password' : userPassword
    });
    return this.http.post('http://localhost:3000/login', '', {headers});
  }
}
