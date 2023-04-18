import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from 'src/models/User';
import { UserService } from '../../services/user.service';

import { ReactiveFormsModule,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User = new User(0, "", "", "", "");
  isAlreadyExist: boolean = false;
  isSameUserName: boolean = false;

  constructor(
    private httpClient: HttpClient,
    private rout: Router,
    private userService: UserService) { }

  addNewUser() {
    this.userService.addNewUser(this.user).subscribe({
      next: succes => {
        if (succes == false) {
          this.isAlreadyExist = true;
          this.isSameUserName = false;
          return;
        }
        if (succes == true) {
          this.isSameUserName = true;
          this.isAlreadyExist = false;
          return;
        }
        this.rout.navigate(["allRecipes"]);
        this.user = succes;
        this.userService.setCurrenUserStorage(this.user);
        this.userService.userLogin.next(this.user);

      }
    })
  }
  ngOnInit(): void {
    this.user.Name = this.userService.userToLogin;
  }


  email:FormControl = new FormControl('', [Validators.required, Validators.email]);
  pass:FormControl = new FormControl('', [Validators.required,Validators.minLength(6)]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  hide=true;
}
