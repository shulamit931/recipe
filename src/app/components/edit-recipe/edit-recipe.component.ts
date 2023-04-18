import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/models/Recipe';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit, OnDestroy {

  recipe: Recipe;
  edittedRecipe: Recipe;
  id: number;
  edidSub: Subscription;
  sub: Subscription;
  recipeSub: Subscription;

  constructor(private rout: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnDestroy(): void {
    if (this.sub)
      this.sub.unsubscribe();
    if (this.edidSub)
      this.edidSub.unsubscribe()
    if (this.recipeSub)
      this.recipeSub.unsubscribe();
  }

  ngOnInit(): void {
    let id = this.rout.snapshot.params['id'];
    if (this.recipeService.arrRecipe)
      this.recipe = this.recipeService.arrRecipe.find(r => r.Id == id);
    else
      this.recipeSub = this.recipeService.getRecipe(id).subscribe(data => this.recipe = data);
    this.edittedRecipe = structuredClone(this.recipe);
  }

  editRecipe() {
    this.edidSub = this.recipeService.editRecipe(this.recipe.Id, this.edittedRecipe).subscribe(data => {let index= this.recipeService.arrRecipe.findIndex(r=>r.Id==data.Id); this.recipeService.arrRecipe.splice(index,1);this.recipeService.arrRecipe.push(data);});
  }

}
