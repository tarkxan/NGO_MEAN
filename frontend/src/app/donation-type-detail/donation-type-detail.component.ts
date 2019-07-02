import { Component, OnInit, Input } from '@angular/core';
import { IDonationType } from '../DonationType';
import { FormGroup, FormControl } from '@angular/forms';
import { DonationTypeService } from '../donation-type.service';
import { Router } from '@angular/router';
import { DonationTypeComponent } from '../donation-type/donation-type.component';

@Component({
  selector: 'app-donation-type-detail',
  templateUrl: './donation-type-detail.component.html',
  styleUrls: ['./donation-type-detail.component.css']
})
export class DonationTypeDetailComponent implements OnInit {

  @Input() donation_type: IDonationType;
  private donationType: DonationTypeComponent;

  constructor(private service: DonationTypeService,
              private router: Router) { }

  onSubmit(type_id,
           type_name,
           is_active,
           monthly_recurrence) {

    console.log("onSumbit invoked" + type_id);

    const data: IDonationType = {
      type_name: type_name,
      is_active: is_active,
      monthly_recurrence: monthly_recurrence
    };

    this.service.updateDonationType(type_id, data).subscribe(
      body => {console.log('Submitted to server'); console.log(body); },
      error => {console.log(error); }
    );
    this.donation_type = null;
    this.donationType.refresh();
    // location.reload();
  }

  ngOnInit() {
  }

  onCancel() {
    // this.donation_type = null;
    // this.donationType.refresh();
    location.reload();
  }
}
