import { Component, Input } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
import { IngredientDetails } from '../../models/ingredient-details';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ingredient',
  standalone: true,
  imports: [],
  templateUrl: './ingredient.component.html',
  styleUrl: './ingredient.component.css'
})
export class IngredientComponent {

  constructor(private service:IngredientService, private route:ActivatedRoute){}

  ingredient:IngredientDetails = {} as IngredientDetails

  ngOnInit(){
    this.route.paramMap.subscribe(response => {
      this.service.getIngredient(parseInt(response.get("id")?? ""), 1, "serving")
      .subscribe(response => console.log(this.ingredient = response))
    });
  }

  getImageFor(id: string) : string {
	return "https://img.spoonacular.com/ingredients_500x500/" + id;
  }

  capitalize(text:string): string {
	return text.split(" ").map(s => s.charAt(0).toLocaleUpperCase() + s.slice(1)).join(" ");
  }

  getWikipediaSearch(text:string): string {
	return "https://en.wikipedia.org/w/index.php?search=" + text.replace(" ", "+");
  }
}
