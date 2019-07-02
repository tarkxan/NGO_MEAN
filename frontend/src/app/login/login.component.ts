import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../services/user-auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userCred;
  isLoggingIn = true;
  // authType = "LOGIN";
  constructor(private userAuth: UserAuthService, private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('token')) {
      this.router.navigate(['home']);
    }
  }

  login(loginForm){

    ((loginForm as HTMLElement).querySelector('#errorMsg') as HTMLElement).innerText = '';

    const email = ((loginForm as HTMLElement).querySelector('#email') as HTMLInputElement).value;
    const password = ((loginForm as HTMLElement).querySelector('#password') as HTMLInputElement).value;

    console.log('Email:', email , ' Password:', password);
    // *Make HTTP POST TO LOGIN AND GETS TOKEN AS A VALID RESPONSE
    this.userAuth.attemptLogin(email, password).subscribe(data => {
      console.log(data ? data : 'User not found');
      if (data) {
        this.userCred = data;
        // *Save token to local storage.
        localStorage.setItem('token', this.userCred.token);
        localStorage.setItem('userData', this.userCred.userData);
        // *Direct to homepage if token data is saved.
        console.log(localStorage.getItem('token'));
        location.reload();
      } else {
        this.loginFailed(loginForm);
      }
    });
  }

  loginFailed(loginForm){
    ((loginForm as HTMLElement).querySelector('#errorMsg') as HTMLElement).innerText = 'User Not Found';
  }

  changeAuthMethod(){
    this.isLoggingIn = !this.isLoggingIn;
  }

 }
