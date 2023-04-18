import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stars'
})
export class StarsPipe implements PipeTransform {

  transform(value:number): string {
    return '*'.repeat(value);
  }

}
