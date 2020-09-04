import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertify: AlertifyService
  ) { }

  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      //this means we've satisfied the requirements of CanActivate then user can proceed
      return true;
    }

    this.alertify.error('You shall not pass!');
    //send user back to home component if not logged in
    this.router.navigate(['/home']);
    return false;
  }
}
