import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Category } from 'src/models/Category';
import { Layer, Recipe } from 'src/models/Recipe';
import { CategoryService } from '../../services/category.service';
import { RecipeService } from '../../services/recipe.service';
import Swal from 'sweetalert2/dist/sweetalert2.all.js'

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit, OnDestroy {
  description: string = "";
  componentsArr: string[] = [""];
  component: string = "";
  newRecipe: Recipe = new Recipe();
  newLayer: Layer = new Layer();
  category: Category[];
  categoryName: string = "בשר";
  preperation: string[] = [""];
  preperLevl: string = "";
  categorySubscription: Subscription;
  userSubscription: Subscription;
  AddRecipeSubscription: Subscription;
  pushRecipeSubscription: Subscription;

  constructor(
    private recipeSrv: RecipeService,
    private categorySrv: CategoryService,
    private userService: UserService,
    private router: Router
  ) { }
  ngOnDestroy(): void {
    if (this.userSubscription)
      this.userSubscription.unsubscribe();
    if (this.categorySubscription)
      this.categorySubscription.unsubscribe();
    if (this.AddRecipeSubscription)
      this.AddRecipeSubscription.unsubscribe();
    if (this.pushRecipeSubscription)
      this.pushRecipeSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.categorySubscription = this.categorySrv.obs.subscribe(
      data => { this.category = data; }
    )
  }

  addLayer() {
    if (this.component)
      this.addComponent();
    this.newLayer.Description = this.description;
    this.componentsArr.forEach(c => this.newLayer.Components.push(c));
    this.newRecipe.Layers.push(this.newLayer);
    this.newLayer = new Layer()
    this.description = "";
    this.component = "";
    this.componentsArr = [""]
  }

  addComponent() {
    this.componentsArr.push(this.component);
    this.component = "";
  }
  addInstruction() {
    this.newRecipe.Preparation.push(this.preperLevl);
    this.preperLevl = "";
  }

  async save(myForm: NgForm) {

    this.userSubscription = this.userService.userLogin.subscribe(data => { this.newRecipe.Id = data.Id });
    this.newRecipe.AddDate = new Date();
    this.newRecipe.CategoryId = this.category.find(c => c.Name == this.categoryName).Id;
    console.log(this.newRecipe);
    this.AddRecipeSubscription = this.recipeSrv.addRecipe(this.newRecipe).subscribe(
      (data) => { this.pushRecipeSubscription = this.recipeSrv.obs.subscribe(suc => suc.push(data)) }
    )
    myForm.reset();
    await Swal.fire('המתכון נוסף בהצלחה')
    this.router.navigate(['allRecipes'])

  }



}
