import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from 'src/models/Recipe';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(recipeArr: Recipe[], filter: boolean, category: number): Recipe[] {
    if (filter)
      return recipeArr.filter(r => r.CategoryId == category);
    return recipeArr;
  }

}
