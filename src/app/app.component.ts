import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipeProject';
  constructor(private userService:UserService){
    userService.userLogin.next(userService.getCurrentUserFromStorage())
    
  }
  
}
