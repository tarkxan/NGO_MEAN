import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: '',
  styles: []
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
    }
    if (localStorage.getItem('userData')) {
      localStorage.removeItem('userData');
    }

    this.router.navigate(['home'])
  }

}
