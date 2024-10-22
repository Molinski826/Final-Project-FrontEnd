import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { RecipeFormComponent } from "./components/recipe-form/recipe-form.component";
import { SearchIngredientsComponent } from "./components/search-ingredients/search-ingredients.component";
import { RecipeListComponent } from "./components/recipe-list/recipe-list.component";
import { ApiClientService } from './services/api-client.service';
import { IngredientService } from './services/ingredient.service';
import { LoginComponent } from "./components/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IngredientComponent, RecipeFormComponent, SearchIngredientsComponent, RecipeListComponent, RouterLink, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
	title = 'Satiety';
	constructor(private router: Router, private api:ApiClientService, private service:IngredientService) { }

	showLoginWidget:boolean = false;

	ngOnInit() {
		this.api.loggedOutError.subscribe(_ => {
			if (this.router.url != "") {
				this.router.navigate(["/"]);
			}
		});
	}

	isLoggedIn() : boolean {
		return this.service.isLoggedIn;
	}

	logout() {
		this.showLoginWidget = false;
		this.service.logout();
	}

	toggleLogin() {
		this.showLoginWidget = !this.showLoginWidget;
	}

	loginVisible() : boolean {
		return !this.isLoggedIn() && this.showLoginWidget;
	}
}
