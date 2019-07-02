import { Component, OnInit, KeyValueDiffers } from '@angular/core';
import { ServDonationService } from '../serv-donation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { IDonation } from '../Donation';
import { DonationTypeService } from '../donation-type.service';
import { NavigationComponent } from '../navigation/navigation.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {
  public type_names = [];
  private donations: IDonation[] = [];
  private url: String = '';
  public errorMsg;
  public logedUserIsAdmin: boolean;
  public logedUserId: string

  // tslint:disable-next-line: max-line-length

  constructor(private cartservice: CartService,
              private service: DonationTypeService,
              private loginUser: NavigationComponent,
              private router: Router,
              private route: ActivatedRoute) {
    // makedonations/continue
    this.url = this.router.url;
    console.log(this.url);

    this.logedUserIsAdmin = this.loginUser.isAdmin;
    this.logedUserId = this.loginUser.user_id;

    monthlyRecurrence: new FormControl({value: false, disabled: false})
  }

  ngOnInit() {
    this.service.getDonationTypes().subscribe(data => {
      this.type_names = data;
      this.logedUserId = this.loginUser.user_id;
      console.log(data);
      console.log("this.logedUserId: " + this.logedUserId);
    });
  }
  onSubmit(frmDonations) {
    console.log("onSubmit");
    let data = frmDonations.value;
    if ( this.url === '/makedonations/continue') {
      console.log(this.donations);
    } else {


      let donation_type_id: string;
      let monthly_recurrence: boolean = false;
      let amount: number;

      for (let key in data) {
        console.log("for loop");

        if (key.slice(0, -1) == "donation_type_id"){
          donation_type_id = data[key];
        }

        else if (key.slice(0, -1) == "monthly_recurrence"){
          monthly_recurrence = data[key];
        }

        else if (key.slice(0, -1) == "amount"){
          amount = data[key];
        }

        // console.log("donation_type_id: " + donation_type_id);
        // console.log("monthly_recurrence: " + monthly_recurrence);
        // console.log("amount: " + amount);
        // console.log("");

        if (donation_type_id != null &&
            // monthly_recurrence != null &&
            amount != null){
          console.log("in if");
          let donationsData = new IDonation();
          donationsData.user_id = this.logedUserId;
          donationsData.donation_type_id = donation_type_id;
          donationsData.monthly_recurrence = monthly_recurrence;
          donationsData.amount = amount;

          console.log("user_id: " + donationsData.user_id);
          console.log("donation_type_id: " + donationsData.donation_type_id);
          console.log("monthly_recurrence: " + donationsData.monthly_recurrence);
          console.log("amount: " + donationsData.amount);

          donation_type_id = null;
          monthly_recurrence = false;
          amount = null;

          this.donations.push(donationsData);
        }


          // donationsData = null;

        // if (key.slice(0, 6) === 'amount' && data[key] != null) {
        //   // console.log("inside loop" + data[key]);
        //   const idonation = new IDonation();
        //   idonation.amount=data[key];
        //   idonation.type_name =data['type_name' + key.slice(6)];
        //   idonation.monthly_recurrence = data['isMonthly' + key.slice(6)];
        //   idonation.donationtypestr = data['donationtypestr'+ key.slice(6)];
        //   // console.log("idonation = "+ data[key])
        //   // console.log("idonation = "+ data['type_name' + key.slice(6)])
        //   this.donations.push(idonation);
        // }

      }
      // console.log("");
      // console.log("this.donations[0].donation_type_id: " + this.donations[0].donation_type_id);
      // console.log("this.donations[0].user_id: " + this.donations[0].user_id);
      // console.log("this.donations[0].amount: " + this.donations[0].amount);
      // console.log("this.donations[0].monthly_recurrence: " + this.donations[0].monthly_recurrence);

      // console.log("this.donations[1].donation_type_id: " + this.donations[1].donation_type_id);
      // console.log("this.donations[1].user_id: " + this.donations[1].user_id);
      // console.log("this.donations[1].amount: " + this.donations[1].amount);
      // console.log("this.donations[1].monthly_recurrence: " + this.donations[1].monthly_recurrence);

      // console.log("donationsData[1].donation_type_id: " + donationsData[1].donation_type_id);
      // console.log("donationsData[1].monthly_recurrence: " + donationsData[1].monthly_recurrence);
      // console.log("donationsData[1].amount: " + donationsData[1].amount);
      // if (donationsData.amount != null)
      //     this.donations.push(donationsData);
      this.cartservice.addDonations(this.donations);
      // .subscribe(data => { data = this.donations; console.log('data' + data); });
      this.router.navigate(['/cart']);
    }

  }
  onCancel() {
    this.donations = [];
    this.cartservice.emptyDonations();
  }

}
