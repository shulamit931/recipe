import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Recipe } from 'src/models/Recipe';
import { User } from 'src/models/User';
import { RecipeService } from '../services/recipe.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class CanEditGuard implements CanActivate, OnInit, OnDestroy {

  recipe: Recipe;
  user: User;
  subRecipe: Subscription;
  subUser: Subscription;
  canActiv: boolean = false;
  constructor(
    private userService: UserService,
    private recipeSrevice: RecipeService,
    private router: Router

  ) { }
  ngOnDestroy(): void {
    if (this.subRecipe)
      this.subRecipe.unsubscribe();
    if (this.subUser)
      this.subUser.unsubscribe()
  }
  ngOnInit(): void {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    console.log(next, state);
    let id = next.params['id'];
    this.recipeSrevice.arrRecipe ?
      this.recipe = this.recipeSrevice.arrRecipe.find(r => r.Id == id) :
      this.subRecipe = this.recipeSrevice.getRecipe(id).subscribe(data => this.recipe = data);

    this.subUser = this.userService.userLogin.subscribe(data => {
      if (data) {
        this.user = data;
        this.canActiv = this.user.Id == this.recipe.UserId
      }
      else {
        this.canActiv = false;
      }
    })
    if (this.canActiv)
      return true;

    return this.router.parseUrl("allRecipes");
  }

}
