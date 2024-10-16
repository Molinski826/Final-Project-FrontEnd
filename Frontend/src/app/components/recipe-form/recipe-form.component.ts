import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Recipes } from '../../models/recipes';
import { Ingredients } from '../../models/ingredients';
import { Results } from '../../models/results';
import { SearchIngredientsComponent } from "../search-ingredients/search-ingredients.component";
import { IngredientService } from '../../services/ingredient.service';

@Component({
	selector: 'app-recipe-form',
	standalone: true,
	imports: [FormsModule, SearchIngredientsComponent],
	templateUrl: './recipe-form.component.html',
	styleUrl: './recipe-form.component.css'
})
export class RecipeFormComponent {
	constructor(private service:IngredientService) {}

  	formRecipe: Recipes = this.getDefaultRecipe();
	formIngredient: Ingredients = {} as Ingredients;
	searchIngredient: string = "";
	searchTerm: string = "";
	searchVisible: boolean = false;

	emitCreate() {
		this.service.submitRecipe(this.formRecipe).subscribe(_ => {
			this.formRecipe = this.getDefaultRecipe();
		});
	}

	addIngredient() {
		this.formRecipe.recipeIngredients.push(this.formIngredient);
		this.formIngredient = { ...this.formIngredient };
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

	getSearch(result: Results) {
		this.searchVisible = false;
		this.formIngredient.name = result.name;
		this.formIngredient.productId = result.id;
	}
}

