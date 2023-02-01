import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/models/Recipe';
import { RecipeService } from '../services/recipe-services.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.scss']
})
export class AllRecipesComponent implements OnInit {
  arr: Recipe[]
  constructor(private recipeSrv: RecipeService) {
    this.recipeSrv.obs.subscribe(
      data=>{this.arr=data; console.log(this.arr)}
    );
  
  }

  ngOnInit(): void {

    
  }

}
