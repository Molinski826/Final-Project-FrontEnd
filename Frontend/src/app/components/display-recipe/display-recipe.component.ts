import { Component } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
import { ActivatedRoute } from '@angular/router';
import { Recipes } from '../../models/recipes';

@Component({
  selector: 'app-display-recipe',
  standalone: true,
  imports: [],
  templateUrl: './display-recipe.component.html',
  styleUrl: './display-recipe.component.css'
})
export class DisplayRecipeComponent {

recipe:Recipes = {}as Recipes;
  constructor(private service:IngredientService, private route:ActivatedRoute){}

  ngOnInit(){
    this.route.paramMap.subscribe(response => {
      response.get("id")
      this.service.getRecipe(response.get("id")?? "").subscribe
      (response => this.recipe = response);
    })
  }

}
