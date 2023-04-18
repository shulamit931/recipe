import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Recipe } from 'src/models/Recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  id: number;
  canEdit: boolean;
  sub: Subscription;
  userSub: Subscription;

  constructor(
    private rout: ActivatedRoute,
    private recipeService: RecipeService,
    private userService: UserService,
    private router: Router) { }
  ngOnDestroy(): void {
    if (this.sub)
      this.sub.unsubscribe();
    if (this.userSub)
      this.userSub.unsubscribe();
  }

  ngOnInit(): void {
    this.id = this.rout.snapshot.params['id']
    this.recipeService.arrRecipe ?
      this.recipe = this.recipeService.arrRecipe.find(r => r.Id == this.id) :
      this.sub = this.recipeService.getRecipe(this.id).subscribe({ next: data => this.recipe = data })
    this.userSub = this.userService.userLogin.subscribe(
      data => {
        if (this.userService.userLogin.value.Id == this.recipe.UserId)
          this.canEdit = true
      })

  }

  editRecipe() {
    this.router.navigate(["editRecipe", this.recipe.Id]);
  }

}
