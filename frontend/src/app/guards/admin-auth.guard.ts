import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    console.log("Admin check")
    if (!localStorage.getItem('token')) {
      // If user is not logged in, redirect to "Login"
      this.router.navigate(['home']);
    } else {
      let userData = JSON.parse(localStorage.getItem('userData'));
      // If the user is logged in, continue
      if (userData.role === 'Admin') {
        return true;
      } else {
        this.router.navigate(['home']);
      }
    }
  }

}
