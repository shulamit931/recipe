import { Component, Input, OnInit } from '@angular/core';
import { Layer, Recipe } from 'src/models/Recipe';

@Component({
  selector: 'app-small-recipe',
  templateUrl: './small-recipe.component.html',
  styleUrls: ['./small-recipe.component.scss']
})
export class SmallRecipeComponent implements OnInit {
  @Input()
  recipe:Recipe;
  constructor() { }

  ngOnInit(): void {
  }

}
