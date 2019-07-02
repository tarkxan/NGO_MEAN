import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '../User';
import { Observable } from 'rxjs';
import { IUserBasic } from '../UserBasic';


@Injectable({
  providedIn: 'root'
})
export class AdminUserManagementService {

  private url: string;

  // Makes a header with the JTW token if its in storage
  headers = localStorage.getItem('token') ? new HttpHeaders({
    'Content-Type' : 'application/json',
    'Cache-Control': 'no-cache',
    'Authorization' : `bearer ${localStorage.getItem('token')}`
  }) : new HttpHeaders({
    'Content-Type' : 'application/json',
    'Cache-Control': 'no-cache'
  });
  header = {headers:this.headers}

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get('http://localhost:3000/api/users', this.header);
  }

  // getAllUsers(): Observable<IUserBasic[]> {
  //   this.url = 'http://localhost:3000/api/users/';
  //   return this.http.get<IUserBasic[]>(this.url);
  // }

  getUserById(user_id){
    console.log("getUserById.id: " + user_id);
    //return this.http.get(`http://localhost:3000/api/users/user?id=${id}`,this.header);
    this.url = 'http://localhost:3000/api/users/';
    return this.http.get<IUser[]>(this.url + user_id);
  }

  // updateUser(id,
  //            user){
  //   return this.http.put(`http://localhost:3000/api/users/user?id=${id}`,{user},this.header)
  // }

  updateUser(id: number,
             data) {
    this.url = 'http://localhost:3000/api/users/';
    return this.http.put(this.url + id, data);
  }

  // updateDonationType(id: number,
  //                    data) {
  //   this.url = 'http://localhost:3000/api/donation_types/';
  //   return this.httpclient.put(this.url + id.toString(), data);
  // }

  // deleteUserById(id){
  //   return this.http.delete(`http://localhost:3000/api/users/user?id=${id}`,this.header);
  // }

  deleteUserById(id) {
    this.url = 'http://localhost:3000/api/users/';
    return this.http.delete(this.url + id);
  }

  addUser(user){
    return this.http.post('http://localhost:3000/api/users', user, this.header);
  }

  userPersonalInfoUpdate(id,user){
    return this.http.put(`http://localhost:3000/api/users/user?id=${id}`,{user},this.header)
  }

}
