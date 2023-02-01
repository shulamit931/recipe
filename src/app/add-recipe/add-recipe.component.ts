import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/models/Recipe';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  newRecipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }
componentChange( i:number, j:number ){}
  save(form:any){}

}
