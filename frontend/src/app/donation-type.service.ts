import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IDonationType } from './DonationType';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DonationTypeService {

  private url: string;
  constructor(private httpclient: HttpClient) { }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server Error');
  }

  getDonationType(type_id: string): Observable<IDonationType[]> {
    this.url = 'http://localhost:3000/api/donation_types/';
    return this.httpclient.get<IDonationType[]>(this.url + type_id);
  }

  getDonationTypes(): Observable<IDonationType[]> {
    this.url = 'http://localhost:3000/api/donation_types/';
    return this.httpclient.get<IDonationType[]>(this.url);
  }

  updateDonationType(id: number,
                     data) {

    this.url = 'http://localhost:3000/api/donation_types/';
    return this.httpclient.put(this.url + id.toString(), data);
  }

  addDonationType(data) {
    this.url = 'http://localhost:3000/api/donation_types/';
    return this.httpclient.post<IDonationType>(this.url, data).pipe(
      catchError(err => this.handleError(err))
    );
  }

  handleError(err) {
    console.log('handle erro');
    return throwError(err);
  }
}
