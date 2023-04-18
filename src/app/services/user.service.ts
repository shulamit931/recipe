import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  userToLogin: string = "";

  userLogin: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
    
  }

  login(user: User): Observable<User | boolean> {
    return this.httpClient.post<User | boolean>(`https://localhost:44336/api/user/Login`, user);
  }

  logout() {
    this.removeCurrrentUseFromStorage();
    this.userLogin.next(null);
  }

  addNewUser(user: User): Observable<User | boolean> {
    return this.httpClient.post<any>(`https://localhost:44336/api/user/Register`, user);
  }

  setCurrenUserStorage(user: User) {
    localStorage.setItem("currentUser", JSON.stringify(user));
  }

  getCurrentUserFromStorage() {
    return JSON.parse(localStorage.getItem("currentUser"));
  }

  removeCurrrentUseFromStorage() {
    localStorage.removeItem("currentUser");
  }
}
