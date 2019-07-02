import { Injectable } from '@angular/core';
import { IDonation } from './Donation';
import { Observable, Subject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private donations: IDonation[];
  constructor() { }

  addDonations(donations): void {
    this.donations = donations;
    // console.log("from add donations service: ");
    // console.log("donation_type_id: " + this.donations[0].donation_type_id);
    // console.log("monthly_recurrence: " + this.donations[0].monthly_recurrence);
    // console.log("amount: " + this.donations[0].amount);

    // console.log("donation_type_id: " + this.donations[1].donation_type_id);
    // console.log("monthly_recurrence: " + this.donations[1].monthly_recurrence);
    // console.log("amount: " + this.donations[1].amount);
  }

  getDonations(): IDonation[] {
    return  this.donations;
  }

  emptyDonations(){
    this.donations = [];
  }

  setDonations(donations: IDonation[]): void {
    let tempDonations: IDonation[] = [];
    if (this.donations) {
      for (let key of donations){
        if (this.donations.filter(data => data.donation_type_id === key.donation_type_id)) {
          tempDonations.push(key);
        } else {
          tempDonations.push(key);
        }
      }
      this.donations = tempDonations;
      // console.log("******************************");
      // for (let key of this.donations)
      // {
      //   for (let i in key){
      //     console.log("i = "+i + "data = " + key[i])
      //   }
      //   console.log("keyinthis"+key)
      // }
    }
  }
}
