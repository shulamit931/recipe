import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseGuard implements CanActivate {

  constructor(private route: Router,private userService: UserService){}
  
  canActivate(): boolean | UrlTree {
    if (this.userService.userLogin.value)
      return true;
    return this.route.parseUrl("login");
  }

}
