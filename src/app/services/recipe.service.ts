import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Recipe } from 'src/models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService implements OnInit {
  obs: Observable<Recipe[]>
  arrRecipe: Recipe[];
  constructor(private httpClient: HttpClient) {
    this.obs = this.httpClient.get<Recipe[]>(`https://localhost:44336/api/recipe/GetAllRecipes`);
    this.obs.subscribe(
      (data) => { this.arrRecipe = data }
    )
  }
  ngOnInit(): void {

  }
  getRecipe(id) {
    return this.httpClient.get<Recipe>(`https://localhost:44336/api/recipe/GetRecipeById?id=${id}`);
  }
  addRecipe(recipe) {
    return this.httpClient.post<Recipe>(`https://localhost:44336/api/recipe/AddRecipe`, recipe);
  }
  editRecipe(id, recipe) {
    return this.httpClient.put<Recipe>(`$https://localhost:44336/api/recipe/UpdateRecipe?recipeId=${id}`, recipe);
  }
}
