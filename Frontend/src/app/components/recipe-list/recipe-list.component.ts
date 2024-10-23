import { Component } from '@angular/core';
import { Recipes } from '../../models/recipes';
import { MatSortModule, Sort } from '@angular/material/sort';
import { IngredientService } from '../../services/ingredient.service';
import { RouterLink } from '@angular/router';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RouterLink, MatSortModule, CdkDrag, CdkDropList],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipeList: Recipes [] = [];
  sortedRecipes: Recipes[] = [];
  reordering: boolean = false;

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

	if (this.reordering && (sort.active != 'priority' || sort.direction != 'asc')) {
		return;
	}

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

  toggleReordering() {
	this.reordering = !this.reordering;
	if (this.reordering) {
		this.sortChanged({active: 'priority', direction: 'asc'});
	} else {
		let map: any = {}
		for (const recipe of this.recipeList) {
			map["" + recipe.id] = recipe.priority;
		}
		this.http.updateRecipeOrder(map).subscribe(console.log);
	}
  }

  dropped(drop: CdkDragDrop<any, any, any>) {
	let replacing = this.sortedRecipes[drop.currentIndex];
	let replacer = this.sortedRecipes[drop.previousIndex];
	this.sortedRecipes[drop.currentIndex] = replacer;
	this.sortedRecipes[drop.previousIndex] = replacing;

	let i:number = 0;
	for (const recipe of this.sortedRecipes) {
		recipe.priority = i++;
	}

	this.sortChanged({active: 'priority', direction: 'asc'});
  }

  compare(a: number | string, b: number | string, isAsc: boolean): number {
	return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  getRandomRecipe() : string {
	return "/Recipe/" + this.recipeList[Math.floor(Math.random() * this.recipeList.length)].id;
  }
}
