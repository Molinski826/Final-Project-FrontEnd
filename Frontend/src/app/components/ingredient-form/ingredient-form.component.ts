import { Component, Input } from '@angular/core';
import { Ingredients } from '../../models/ingredients';

@Component({
  selector: 'app-ingredient-form',
  standalone: true,
  imports: [],
  templateUrl: './ingredient-form.component.html',
  styleUrl: './ingredient-form.component.css'
})
export class IngredientFormComponent {
	@Input() ingredient:Ingredients = {} as Ingredients;
}
