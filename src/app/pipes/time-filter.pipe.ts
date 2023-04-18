import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from 'src/models/Recipe';

@Pipe({
  name: 'timeFilter'
})
export class TimeFilterPipe implements PipeTransform {

  transform(recipeArr: Recipe[], filter: boolean, time: number): Recipe[] {
    if (filter)
      return recipeArr.filter(r => r.PreparationTimeInMinute <= time);
    return recipeArr;
  }

}
