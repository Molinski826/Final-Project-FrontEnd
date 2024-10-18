import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { RecipeFormComponent } from "./components/recipe-form/recipe-form.component";
import { SearchIngredientsComponent } from "./components/search-ingredients/search-ingredients.component";
import { RecipeListComponent } from "./components/recipe-list/recipe-list.component";
import { ApiClientService } from './services/api-client.service';
import { IngredientService } from './services/ingredient.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IngredientComponent, RecipeFormComponent, SearchIngredientsComponent, RecipeListComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
	title = 'Satiety';
	constructor(private router: Router, private api:ApiClientService, private service:IngredientService) { }

	ngOnInit() {
		this.api.loggedOutError.subscribe(_ => {
			if (this.router.url != "") {
				this.router.navigate(["/"]);
			}
		});
	}

	isLoggedIn() : boolean {
		return this.service.isLoggedIn();
	}
}
