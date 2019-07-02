import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;
  userid: number;
  u_role: string;

  constructor() {
    this.title = 'NGO Donation System';
    // this.userid = 1;
    this.u_role = 'admin';
    // this.u_role = 'user';
  }
}
