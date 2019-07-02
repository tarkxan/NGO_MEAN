import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDonation } from './Donation';
import { IDonationDetail } from './DonationDetail';

@Injectable({
  providedIn: 'root'
})
export class ServDonationService {
  private url: string;
  constructor(private httpclient: HttpClient) { }

  getDonations(): Observable<IDonation[]> {
    this.url = 'http://localhost:3000/api/donations';
    return this.httpclient.get<IDonation[]>(this.url);
  }
  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server Error');
  }
  // getDonationTypes(){

  // }
  addDonations(data:IDonationDetail[]) {
    this.url = 'http://localhost:3000/api/donations';
    return this.httpclient.post(this.url, data);
  }

}
