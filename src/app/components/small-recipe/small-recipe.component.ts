import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Layer, Recipe } from 'src/models/Recipe';

@Component({
  selector: 'app-small-recipe',
  templateUrl: './small-recipe.component.html',
  styleUrls: ['./small-recipe.component.scss']
})
export class SmallRecipeComponent implements OnInit {
  @Input()
  recipe: Recipe;
  constructor(private route: Router, private userService: UserService) { }

  ngOnInit(): void {
  }
  details() {
      this.route.navigate(["recipe", this.recipe.Id]);
  }

}
