import { Component, OnInit, Input, Injectable } from '@angular/core';
import { DonationTypeService } from '../donation-type.service';
import { Router } from '@angular/router';
import { IDonationType } from '../DonationType';
import { NavigationComponent } from '../navigation/navigation.component';


@Component({
  selector: 'app-donation-type',
  templateUrl: './donation-type.component.html',
  styleUrls: ['./donation-type.component.css']
})

export class DonationTypeComponent implements OnInit {

  isAdmin: boolean;

  donationTypes = [];
  donationType: IDonationType;

  constructor(private service: DonationTypeService,
              private router: Router,
              private loginUser: NavigationComponent) {
    this.isAdmin = this.loginUser.isAdmin;
  }

  refresh(){
    this.service.getDonationTypes().subscribe(data => {
      this.donationTypes = data;
      console.log(data);
    });
  }

  ngOnInit() {
    this.refresh();
  }

  onSelect(donationType: IDonationType): void {
    this.donationType = donationType;
  }

  addNewType() {
    this.router.navigate(['/typesform']);
  }
}
