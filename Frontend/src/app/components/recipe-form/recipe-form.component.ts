import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Recipes } from '../../models/recipes';
import { Ingredients } from '../../models/ingredients';
import { Results } from '../../models/results';

@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.css'
})
export class RecipeFormComponent {
  @Output() Created = new EventEmitter<Recipes>();

  formRecipe:Recipes = this.getDefaultRecipe();
  formIngredient:Ingredients = {} as Ingredients;
  searchIngredient:string = "";
  searchVisible:boolean = false;

  emitCreate() {
    this.Created.emit(this.formRecipe);
    this.formRecipe = this.getDefaultRecipe();
  }

  addIngredient() {
	this.formRecipe.ingredients.push(this.formIngredient);
	this.formIngredient = {...this.formIngredient};
  }

  getDefaultRecipe() : Recipes {
	return {"id": 0, "name": "", "ingredients": [], "userid": 0};
  }

  removeIngredient(index: number) {
	this.formRecipe.ingredients.splice(index, 1);
  }

  addSearch(){
    this.searchVisible = true;
  }

  getSearch(result:Results){
    this.searchVisible = false;
    this.formIngredient.name = result.name;
    this.formIngredient.productId = result.id;
  
  }
  }

