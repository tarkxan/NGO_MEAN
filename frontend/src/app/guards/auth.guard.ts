import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    if (!localStorage.getItem('token')) {
      // If user is not logged in, redirect to "Login"
      this.router.navigate(['login']);
    } else {
      // If the user is logged in, continue
      return true;
    }
  }

}
