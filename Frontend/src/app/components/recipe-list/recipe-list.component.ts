import { Component } from '@angular/core';
import { Recipes } from '../../models/recipes';
import { HttpClient } from '@angular/common/http';
import { IngredientService } from '../../services/ingredient.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipeList: Recipes [] = [];

  constructor(private http:IngredientService) {}

  ngOnInit(){
	this.updateRecipes();
  }

  updateRecipes() : void {
    this.http.getRecipes().subscribe(response => this.recipeList = response);
  }

  removeRecipe(id: number) : void {
	this.http.deleteRecipe(id).subscribe(_ => this.updateRecipes());
  }

  getEditLink(id: number) : string {
	return "/Recipe/" + id + "/edit";
  }
}
