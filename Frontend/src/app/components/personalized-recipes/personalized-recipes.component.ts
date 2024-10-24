import { Component } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-personalized-recipes',
  standalone: true,
  imports: [KeyValuePipe],
  templateUrl: './personalized-recipes.component.html',
  styleUrl: './personalized-recipes.component.css'
})
export class PersonalizedRecipesComponent {
  constructor(private service:IngredientService) { }

  types:Map<string, boolean> = new Map<string, boolean>([
		["Dairy", false],
		["Eggs", false],
		["Gluten", false],
		["Grain", false],
		["Peanut", false],
		["Seafood", false],
		["Shellfish", false],
		["Soy", false],
		["Sulfite", false],
		["Treenut", false],
		["Wheat", false],
	]);

  ngOnInit() {
    this.service.getPersonalizedRecipes(this.getStrings().join(",")).subscribe()
  }

	getStrings() {
		let stringStuff:string[] = []; 
		for (let [key, value] of this.types){
			if (value) {
				stringStuff.push(key);
			}
	}
  return stringStuff;
	}

  // showMeRecipes() {
	// 	this.service.getPersonalizedRecipes(this.getStrings().join(",")).subscribe(r => {
  //     this.
  //   })
	// }
}
