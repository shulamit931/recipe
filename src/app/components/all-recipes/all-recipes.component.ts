import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/models/Recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.scss']
})
export class AllRecipesComponent implements OnInit, OnDestroy {
  arr: Recipe[];
  subscription: Subscription;
  categoryFilter: boolean = false;
  timeFilter: boolean = false;
  categoryFilterParams: number;
  timeFilterParams: number;

  constructor(private recipeSrv: RecipeService) {
  }

  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.recipeSrv.obs.subscribe(
      data => { this.arr = data; console.log(this.arr) }
    );
  }

  clearFilter() {
    this.categoryFilter = false;
    this.timeFilter = false;
    this.categoryFilterParams = null;
    this.timeFilterParams = null;
  }

}
