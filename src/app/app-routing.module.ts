import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanEditGuard } from './guards/can-edit.guard';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { AllRecipesComponent } from './components/all-recipes/all-recipes.component';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';
import { LoginComponent } from './components/login/login.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RegisterComponent } from './components/register/register.component';
import { ExpenseGuard } from './guards/expense.guard';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "allRecipes", component: AllRecipesComponent },
  { path: "addRecipe", component: AddRecipeComponent, canActivate: [ExpenseGuard] },
  { path: "recipe/:id", component: RecipeDetailsComponent, canActivate: [ExpenseGuard] },
  { path: "editRecipe/:id", component: EditRecipeComponent, canActivate: [CanEditGuard] },
  { path: "", redirectTo: "allRecipes", pathMatch: 'full' },
  { path: "*", redirectTo: "allRecipes" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
