import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { User } from '../../models/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = new User(0, "", "", "", "");
  isCorrectPassword: boolean = false;
  constructor(private httpClient: HttpClient, private rout: Router) { }

  isLogin() {
    let log = this.httpClient.post<User|Boolean>(`${environment.baseUrl}user/Login`, this.user).subscribe(
      succes => {
        if (succes==false) {
          this.rout.navigate(["register",this.user.Name])
          return;
        }
        if (succes==true) {
          this.isCorrectPassword = true;
          return;
        }
        this.rout.navigate(["allRecipes"])
      },
      error => {

      }
    )
  }
  ngOnInit(): void {
  }

}
