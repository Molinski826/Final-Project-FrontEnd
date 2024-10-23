import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Recipes } from '../../models/recipes';
import { Ingredients } from '../../models/ingredients';
import { Results } from '../../models/results';
import { SearchIngredientsComponent } from "../search-ingredients/search-ingredients.component";
import { IngredientService } from '../../services/ingredient.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-recipe-form',
	standalone: true,
	imports: [FormsModule, SearchIngredientsComponent, RouterLink],
	templateUrl: './recipe-form.component.html',
	styleUrl: './recipe-form.component.css'
})
export class RecipeFormComponent {
	constructor(private service:IngredientService, private router:Router, private routing:ActivatedRoute) {}

  	formRecipe: Recipes = this.getDefaultRecipe();
	formIngredient: Ingredients = {} as Ingredients;
	searchIngredient: string = "";
	searchTerm: string = "";
	searchVisible: boolean = false;
	editing: boolean = false;
	id: string = "";

	ngOnInit() {
		this.routing.paramMap.subscribe(map => {
			if (map.has("id")) {
				this.id = map.get("id")!;
				this.editing = true;
				this.service.getRecipe(this.id).subscribe(
					r => this.formRecipe = r
				);
			}
		});
	}

	emitCreate() {
		const result: Observable<Object> = this.editing ?
			this.service.updateRecipe(this.id, this.formRecipe) :
			this.service.submitRecipe(this.formRecipe);

		result.subscribe(o => {
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
		return { "id": 0, "name": "", "recipeIngredients": [], "userid": null, "servings": 1, "calories": 0, "carbs": 0, "priority": 0};
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
	
	capitalize(text:string): string {
		return (text) ? text.split(" ").map(s => s.charAt(0).toLocaleUpperCase() + s.slice(1)).join(" ") : "";
	}
}

