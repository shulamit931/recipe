import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { AllRecipesComponent } from './components/all-recipes/all-recipes.component';
import { FormsModule } from '@angular/forms';
import { SmallRecipeComponent } from './components/small-recipe/small-recipe.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { AngularInputFocusModule } from 'angular-input-focus';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterRecipesPipe } from './pipes/filter-recipes.pipe';
import { TimeFilterPipe } from './pipes/time-filter.pipe';
import { CategoryFilterPipe } from './pipes/category-filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StarsPipe } from './pipes/stars.pipe';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AllRecipesComponent,
    SmallRecipeComponent,
    AddRecipeComponent,
    RecipeDetailsComponent,
    EditRecipeComponent,
    NavbarComponent,
    FilterRecipesPipe,
    TimeFilterPipe,
    CategoryFilterPipe,
    StarsPipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AngularInputFocusModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
