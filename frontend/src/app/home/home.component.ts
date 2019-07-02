import { Component, OnInit } from '@angular/core';
import { CharitiesServiceService } from '../services/charities-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  charities;
  constructor(private charityService:CharitiesServiceService) { }

  ngOnInit() {
    this.charityService.getAllCharities().subscribe(data =>{
      this.charities = data;
      console.log(this.charities)
    })
  }

}
