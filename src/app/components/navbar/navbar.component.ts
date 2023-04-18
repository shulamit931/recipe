import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationStart, Route, Router, UrlTree } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

 
  subscription: Subscription;
  user: User;
  url: string;
  urlSub: Subscription;
  

  constructor(private userService: UserService, private route: Router) { }
  logout() {
    this.userService.logout();
    this.route.navigate(['/allRecipes']);
  }

  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe();
    if (this.urlSub)
      this.urlSub.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.userService.userLogin.subscribe(
      data => { this.user = data; }
    )
    this.urlSub = this.route.events.subscribe(data => { if (data instanceof NavigationStart) { this.url = data.url; console.log(this.url) } })
  }
 


}
