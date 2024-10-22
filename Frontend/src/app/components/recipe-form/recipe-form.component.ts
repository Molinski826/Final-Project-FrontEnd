import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Recipes } from '../../models/recipes';
import { Ingredients } from '../../models/ingredients';
import { Results } from '../../models/results';
import { SearchIngredientsComponent } from "../search-ingredients/search-ingredients.component";
import { IngredientService } from '../../services/ingredient.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-recipe-form',
	standalone: true,
	imports: [FormsModule, SearchIngredientsComponent],
	templateUrl: './recipe-form.component.html',
	styleUrl: './recipe-form.component.css'
})
export class RecipeFormComponent {
	constructor(private service:IngredientService, private router:Router) {}

  	formRecipe: Recipes = this.getDefaultRecipe();
	formIngredient: Ingredients = {} as Ingredients;
	searchIngredient: string = "";
	searchTerm: string = "";
	searchVisible: boolean = false;

	emitCreate() {
		this.service.submitRecipe(this.formRecipe).subscribe(o => {
			let recipe: Recipes = o as Recipes;
			this.router.navigate(["/Recipe/", recipe.id]);
		});
	}

	addIngredient() {
		this.formRecipe.recipeIngredients.push(this.formIngredient);
		this.formIngredient = { } as Ingredients;
		this.searchTerm = "";
	}

	getDefaultRecipe(): Recipes {
		return { "id": 0, "name": "", "recipeIngredients": [], "userid": null, "servings": 1 };
	}

	removeIngredient(index: number) {
		this.formRecipe.recipeIngredients.splice(index, 1);
	}

	addSearch() {
		this.searchIngredient = this.searchTerm;
		this.searchVisible = true;
	}

	getSearch(result: Results | null) {
		this.searchVisible = false;
		if (result != null) {
			this.formIngredient.name = result.name;
			this.formIngredient.productId = result.id;
		}
	}
}

