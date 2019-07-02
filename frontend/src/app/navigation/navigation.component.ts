import { Component, OnInit } from '@angular/core';
import { DonationsListComponent } from '../donations-list/donations-list.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  authUser;
  user;
  isAdmin = false;
  user_id: string;

  constructor() {

   }

   returnLoginUserId(){
     return this.user_id
   }

  ngOnInit() {
    setTimeout(()=>{
      if (localStorage.getItem('userData')) {
        this.authUser = JSON.parse(localStorage.getItem('userData'));
        this.user = `Hi, ${(this.authUser as any).firstname}`;
        this.isAdmin = (this.authUser as any).role.toLowerCase() == "admin";

        this.user_id = this.authUser._id;

        console.log(`User ${this.isAdmin ? "IS" : "IS NOT"} an admin`);
        console.log('this.isAdmin', this.isAdmin);
        console.log('this.user_id', this.user_id);

      } else {
          this.authUser = null;
          this.user = 'Welcome Guest!';
          this.isAdmin = false;
          console.log('No user logged in');
      }
    },)
  }

  // Toggle Side Navigation Bar
  toggleSideNav() {
    let width = document.getElementById("mySidebar").clientWidth > 0 ? '0' : '250px';
    document.getElementById("mySidebar").style.width = width;
  }

  authChange() {
    this.user = 'Welcome Guest!';
  }

  onMyDonationsClick(){
    let donations: DonationsListComponent;

  }

  onAllDonationsClick(){

  }

}
