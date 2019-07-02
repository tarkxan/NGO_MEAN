import { Injectable } from '@angular/core';
import { IDonationDetail } from './DonationDetail';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonationsListService {

  private url: string;
  constructor(private httpclient: HttpClient) { }

  getDonationsList(): Observable<IDonationDetail[]> {
    this.url = 'http://localhost:3000/api/donations/';
    return this.httpclient.get<IDonationDetail[]>(this.url);
  }
}
