import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthServiceService, private router:Router) { }

  canActivate() {
    if(this.auth.IsLoggedIn()){
    return true;
    }
    alert("You have not logged in")
    this.router.navigate(['login']);
    return false;
  }
  
}
