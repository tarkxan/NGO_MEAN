import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDonation } from '../Donation';
import { CartService } from '../cart.service';
import { IDonationDetail } from '../DonationDetail';
import { ServDonationService } from '../serv-donation.service';

//hello
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  [x: string]: any;
  donations: IDonation[] = [];
  private activatedRoute: ActivatedRoute;
  totalamount: number = 0;
  constructor(private servicecart: CartService,
              private servicedonation: ServDonationService,
              private router: Router) { }

  ngOnInit() {
    // this.servicecart.getDonations()
    //   .subscribe(data => {this.donations = data; console.log('data' + data); });
    this.donations = this.servicecart.getDonations();

    if (this.donations) {
      //console.log("jsonObj"+this.donations);
      for (let key of this.donations)
      {
        // console.log("Number(this.totalamount)"+this.totalamount)
        this.totalamount = Number(this.totalamount) + Number(key.amount);
        // console.log("keyinthis"+this.totalamount)
      }
    }else {
      this.donations = [];
    }
  }

  removeDonation(donationtype) {
    console.log("in removeDonation" + donationtype);
    for (let key of this.donations)
    {
      console.log("keyinthis" + key.donation_type_id + 'donation type from function parameter'+donationtype)

      if (key.donation_type_id === donationtype) {
        console.log("inside pop " + key.amount + 'type = '+ key.donation_type_id);
        this.totalamount = Number(this.totalamount) - Number(key.amount);
        this.donations = this.donations.filter(data => data !== key);
        // break;
      }
    }
    console.log("******************************");
    for (let key of this.donations)
    {
      for (let i in key){
        console.log("i = "+i + "data = " + key[i])
      }
      console.log("keyinthis" + key)
    }
  }
  continueShopping() {
    this.servicecart.setDonations(this.donations);
    this.router.navigate(['/makedonations/continue']);
  }
  onSubmit(){
    let donationdetails: IDonationDetail[] = [];
    this.servicecart.setDonations(this.donations);
    console.log('in onSubmit Proceed to checkout function');
    for (let key of this.donations)
    {
      let donationdetail: IDonationDetail = new IDonationDetail();
      donationdetail.donation_type_id = key.donation_type_id;
      donationdetail.user_id = key.user_id;
      donationdetail.donation_date = Date();
      donationdetail.amount = key.amount;
      donationdetail.monthly_recurrence = key.monthly_recurrence;

      donationdetails.push(donationdetail);
    }
    for (let key of this.donations)
    {
      for (let i in key) {
        console.log("i = " + i + " data = " + key[i]);
      }
      console.log("keyinthis: " + key);
    }
    this.servicedonation.addDonations(donationdetails)
     .subscribe(data => { data = donationdetails; console.log('data' + data); });

     this.router.navigate(['/donationslist']);
  }
}
