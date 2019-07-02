import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DonationsListService } from '../donations-list.service';
import { AdminUserManagementService } from '../services/admin-user-management.service';
import { DonationTypeService } from '../donation-type.service';
import { NavigationComponent } from '../navigation/navigation.component';
import { IDonationType } from '../DonationType';
import { IUserBasic } from '../UserBasic';
import { IDonationsList } from '../DonationsList';
import { DonationsDataClass } from '../DonationsDataClass';
import { IDonationDetail } from '../DonationDetail';

@Component({
  selector: 'app-donations-list',
  templateUrl: './donations-list.component.html',
  styleUrls: ['./donations-list.component.css']
})
export class DonationsListComponent implements OnInit {

  isAdmin: boolean;

  donationsData: IDonationDetail[] = [];
  userData;
  donationTypes;

  displayList: DonationsDataClass[] = [];
  //displayRow: DonationsDataClass;

  private fName: string;
  private lName: string;
  donatTypeName: string;
  private donatSum: number;
  private monthly: boolean;

  constructor(private adminUserService: AdminUserManagementService,
              private donationsListService: DonationsListService,
              private donationTypeService: DonationTypeService,
              private loginUser: NavigationComponent,
              private router: Router) {
    this.isAdmin = this.loginUser.isAdmin;

    console.log("login user id: " + this.loginUser.user_id);
  }

  ngOnInit() {

    // donations data
    this.donationsListService.getDonationsList().subscribe(donatData => {
      this.donationsData = donatData;
      console.log("On Init Donations Data: ", donatData);


      for (let donatRecord of donatData) {

        // console.log("user_id: ", donatRecord.user_id);
        // console.log("donation_type_id: ", donatRecord.donation_type_id);
        // console.log("amount: ", donatRecord.amount);
        // console.log("monthly_recurrence: ", donatRecord.monthly_recurrence);
        // console.log("donation_date: ", donatRecord.donation_date);
        let displayRow: DonationsDataClass = {
            first_name: '',
            last_name: '',
            type_name: '',
            amount:donatRecord.amount,
            monthly_recurrence: donatRecord.monthly_recurrence,
            date: donatRecord.donation_date
        };

        // donation type data
        this.donationTypeService.getDonationType(donatRecord.donation_type_id).subscribe(donatType => {
            this.donationTypes = donatType;
            // console.log("this.donatTypeName: ", this.donatTypeName);
              console.log("Donation Type: ", donatType);
              displayRow.type_name = this.donationTypes.type_name;
            // user data
            this.adminUserService.getUserById(donatRecord.user_id).subscribe(userData => {
              this.userData = userData;
              displayRow.first_name = this.userData.firstname;
              displayRow.last_name = this.userData.lastname;
              console.log("First name");
              console.log(this.userData)
              //console.log('User Data: ', userData);
              // this.displayRow.first_name = this.userData.firstname;
            },
            err=> console.log(err));

        });

        if (this.loginUser.isAdmin ||
            this.loginUser.user_id === donatRecord.user_id){
          this.displayList.push(displayRow);
        }
      }

    });

  }

}
