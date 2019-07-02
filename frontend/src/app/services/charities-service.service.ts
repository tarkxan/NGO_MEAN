import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharitiesServiceService {

  // Makes a header with the JTW token if its in storage
  headers = localStorage.getItem('token') ? new HttpHeaders({
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'Authorization': `bearer ${localStorage.getItem('token')}`
  }) : new HttpHeaders({
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  });
  header = { headers: this.headers }
  constructor(private http: HttpClient) { }

  getAllCharities() {
    return this.http.get('http://localhost:3000/api/charities', this.header);
  }

  getCharityById(id){
    return this.http.get(`http://localhost:3000/api/charities/charity?id=${id}`,this.header);
  }

  updateCharity(id,charity){
    return this.http.put(`http://localhost:3000/api/charities/charity?id=${id}`,{charity},this.header)
  }

  deleteCharityById(id){
    return this.http.delete(`http://localhost:3000/api/charities/charity?id=${id}`,this.header);
  }

  addCharity(charity){
    return this.http.post('http://localhost:3000/api/charities',charity,this.header);
  }
}
