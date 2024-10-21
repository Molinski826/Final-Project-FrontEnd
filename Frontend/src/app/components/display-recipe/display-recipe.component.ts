import { Component } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
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

  constructor(private service:IngredientService, private route:ActivatedRoute){}

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
	let extended: Observable<IngredientDetails>[] = [];
	for(let ingredient of recipe.recipeIngredients) {
		extended.push(this.service.getIngredient(ingredient.productId, ingredient.amount, ingredient.unit));
	}
	forkJoin(extended).subscribe(result => this.processIngredients(result));
  }

  processIngredients(ingredients:IngredientDetails[]) : void {
	this.extendedIngredients = ingredients;
	let totalCarbs:number = 0;
	for (let ingredient of ingredients) {
		for (const nutrient of ingredient.nutrition.nutrients) {
			if (nutrient.name == "Carbohydrates") {
				totalCarbs += nutrient.amount;
				break;
			}
		}
	}
	this.carbsPerServing = totalCarbs / this.recipe.servings;
	this.updateInsulinDose();
  }

  updateInsulinDose() : void {
	this.insulinPerServing = this.carbsPerServing / this.user.carbRatio;
	this.insulinPerServing += (this.bloodGlucose - 120) / this.user.correctionFactor;
  }

}
