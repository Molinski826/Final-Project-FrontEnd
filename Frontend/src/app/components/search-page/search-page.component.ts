import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchIngredientsComponent } from "../search-ingredients/search-ingredients.component";
import { Results } from '../../models/results';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [FormsModule, SearchIngredientsComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {
	constructor(private router:Router) {}

	searchTerm:string = "";
	submittedSearch: string = "";
	recipeSearch: boolean = false;

	goToPage(result:Results|null) {
		if (result != null) {
			this.router.navigate(["/Ingredient/", result.id]);
		}
	}

	updateSearch() {
		this.submittedSearch = this.searchTerm;
	}
}
