import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Recipes } from '../../models/recipes';

@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.css'
})
export class RecipeFormComponent {
  @Output() Created = new EventEmitter<Recipes>();

  formRecipe:Recipes = {} as Recipes;

  emitCreate() {
    this.Created.emit(this.formRecipe);
    this.formRecipe = {} as Recipes;
  }
}
