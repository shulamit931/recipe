import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from 'src/models/Recipe';

@Pipe({
  name: 'filterRecipes'
})
export class FilterRecipesPipe implements PipeTransform {

  transform(recipeArr: Recipe[], filterPredicate?: number, params?: any): Recipe[] {
    if (filterPredicate == 1) {
      return recipeArr.filter(r => r.CategoryId == +params);
    }
    if(filterPredicate==2){
      return recipeArr.filter(r=>r.PreparationTimeInMinute<params); 
    }
    return recipeArr;
  }

}
