import { Component } from '@angular/core';
import { Recipes } from '../../models/recipes';
import { HttpClient } from '@angular/common/http';
import { MatSortModule, Sort } from '@angular/material/sort';
import { IngredientService } from '../../services/ingredient.service';
import { RouterLink } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RouterLink, MatSortModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipeList: Recipes [] = [];
  sortedRecipes: Recipes[] = [];

  constructor(private http:IngredientService) {}

  ngOnInit(){
	this.updateRecipes();
  }

  updateRecipes() : void {
    this.http.getRecipes().subscribe(response => {
		this.recipeList = response;
		this.sortedRecipes = [...this.recipeList];
	});
  }

  removeRecipe(id: number) : void {
	this.http.deleteRecipe(id).subscribe(_ => this.updateRecipes());
  }

  getEditLink(id: number) : string {
	return "/Recipe/" + id + "/edit";
  }

  sortChanged(sort: Sort) {
	const data = [...this.recipeList];
    if (!sort.active || sort.direction === '') {
      this.sortedRecipes = data;
      return;
    }

    this.sortedRecipes = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
		switch (sort.active) {
			case 'name':
			return this.compare(a.name, b.name, isAsc);
			case 'calories':
			return this.compare(a.calories, b.calories, isAsc);
			case 'carbs':
			return this.compare(a.carbs, b.carbs, isAsc);
			case 'priority':
			return this.compare(a.priority, b.priority, isAsc);
			default:
			return 0;
		}
	});
  }

  compare(a: number | string, b: number | string, isAsc: boolean): number {
	return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
