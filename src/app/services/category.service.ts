import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from 'src/models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  obs:Observable<Category[]>=this.httpClient.get<Category[]>(`https://localhost:44336/api/category/GetAllCategories`);
  constructor(private httpClient:HttpClient) {
   
   }
}
