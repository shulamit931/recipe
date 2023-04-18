import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../../../models/User';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  user: User = new User(0, "", "", "", "");
  isCorrectPassword: boolean = false;
  login: Subscription;
  constructor(private rout: Router, private userService: UserService) { }


  isLogin() {
    this.login = this.userService.login(this.user).subscribe(
      {
        next: succes => {
          if (succes == false) {
            this.userService.userToLogin = this.user.Name;
            this.rout.navigate(["register"])
            return;
          }
          if (succes == true) {
            this.isCorrectPassword = true;
            return;
          }
          else {
            this.user = succes;
            this.userService.setCurrenUserStorage(this.user);
            this.userService.userLogin.next(this.user);
            this.rout.navigate(["allRecipes"]);
          }

        },
        error: error => {

        }
      }
    )
  }
  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    if (this.login)
      this.login.unsubscribe();
  }

}
