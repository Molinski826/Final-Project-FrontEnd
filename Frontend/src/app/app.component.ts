import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { RecipeFormComponent } from "./components/recipe-form/recipe-form.component";
import { SearchIngredientsComponent } from "./components/search-ingredients/search-ingredients.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IngredientComponent, RecipeFormComponent, SearchIngredientsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend';
}
