import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DonationTypeService } from '../donation-type.service';
import { IDonationType } from '../DonationType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donation-types-editor',
  templateUrl: './donation-types-editor.component.html',
  styleUrls: ['./donation-types-editor.component.css']
})

  export class DonationTypesEditorComponent {

    constructor(private service: DonationTypeService,
                private router: Router) { }

    donationTypeForm = new FormGroup({
      typeName: new FormControl(''),
      isActive: new FormControl({value: true, disabled: false}),
      monthlyRecurrence: new FormControl({value: false, disabled: false})
    });

    onSubmit(donationTypeForm) {
      // TODO: Use EventEmitter with form value
      // console.warn(this.donationTypeForm.value);

      console.log(donationTypeForm.value);
      const data: IDonationType = {
        type_name: donationTypeForm.value.typeName,
        is_active : donationTypeForm.value.isActive,
        monthly_recurrence: donationTypeForm.value.monthlyRecurrence
      };

      this.service.addDonationType(data).subscribe(
        body => {console.log('Submitted to server'); console.log(body); },
        error => {console.log(error); }
      );

      this.router.navigate(['/types']);
    }
  }
