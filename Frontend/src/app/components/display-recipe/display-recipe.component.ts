import { Component } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Recipes } from '../../models/recipes';
import { IngredientDetails } from '../../models/ingredient-details';
import { forkJoin, Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { Users } from '../../models/users';

@Component({
  selector: 'app-display-recipe',
  standalone: true,
  imports: [FormsModule, RouterLink, DecimalPipe],
  templateUrl: './display-recipe.component.html',
  styleUrl: './display-recipe.component.css'
})
export class DisplayRecipeComponent {

recipe:Recipes = {}as Recipes;
extendedIngredients:IngredientDetails[] = [];
carbsPerServing:number = 0;
insulinPerServing:number = 0;
bloodGlucose:number = 0;
user:Users = {} as Users;

  constructor(private service:IngredientService, private route:ActivatedRoute, private routing:Router){}

  ngOnInit(){
    this.route.paramMap.subscribe(response => {
      response.get("id")
      this.service.getRecipe(response.get("id")?? "").subscribe
      (response => this.setRecipe(response));
    });
	this.service.getUser().subscribe(r => {
		this.user = r;
		this.updateInsulinDose();
	});
  }

  setRecipe(recipe:Recipes) : void {
	this.recipe = recipe;
	this.carbsPerServing = recipe.carbs / recipe.servings;
	this.updateInsulinDose();
  }

  updateInsulinDose() : void {
	this.insulinPerServing = this.carbsPerServing / this.user.carbRatio;
	this.insulinPerServing += (this.bloodGlucose - 120) / this.user.correctionFactor;
  }

  deleteRecipe() : void {
	this.service.deleteRecipe(this.recipe.id).subscribe(_ => {
		this.routing.navigate(["/MyRecipes"]);
	});
  }

  capitalize(text:string): string {
	return text.split(" ").map(s => s.charAt(0).toLocaleUpperCase() + s.slice(1)).join(" ");
  }

  printMe(): void {
	window.print();
  }
}
