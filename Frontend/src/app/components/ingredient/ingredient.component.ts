import { Component, Input } from '@angular/core';
import { Ingredients } from '../../models/ingredients';
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
      this.service.getIngredient(parseInt(response.get("id")?? ""))
      .subscribe(response => this.ingredient= response)
    });
  

  }
}
