import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from 'src/models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
user:User= new User(0, "", "", "", "");
  constructor(private httpClient: HttpClient, private rout: Router,private route:ActivatedRoute) { }
  isAlreadyExist:boolean=false;
  isSameUserName:boolean=false;
  addNewUser(){
     let log = this.httpClient.post<User|Boolean>(`${environment.baseUrl}user/Register`, this.user).subscribe(
      succes => {
        if (succes==false) {
          this.isAlreadyExist=true;
          this.isSameUserName=false;
          return;
        }
        if (succes==true) {
          this.isSameUserName=true;
          this.isAlreadyExist=false;
          return;
        }
        this.rout.navigate(["allRecipes"])
      },
      error => {

      }
    )
  }
  ngOnInit(): void {
    this.user.Name=this.route.snapshot.params['name'];
  }

}
