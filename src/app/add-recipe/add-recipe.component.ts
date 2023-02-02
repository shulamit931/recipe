import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Layer, Recipe } from 'src/models/Recipe';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  description:string
  component:string
  newRecipe: Recipe = new Recipe();
  
  constructor() { }

  ngOnInit(): void {
  }
  componentChange(i: number, j: number) { }
  save(form: any) { }
  
  addLayer(desc:string) {
    this.newRecipe.Layers.push(new Layer());
    this.newRecipe.Layers[this.newRecipe.Layers.length-1].Description=desc;
  }
  
  addComponent(comp:string) {
    this.newRecipe.Layers[this.newRecipe.Layers.length-1].Components.push(comp);
  }

}
