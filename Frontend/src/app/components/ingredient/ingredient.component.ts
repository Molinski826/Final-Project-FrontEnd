import { Component, Input } from '@angular/core';
import { Ingredients } from '../../models/ingredients';
import { IngredientService } from '../../services/ingredient.service';

@Component({
  selector: 'app-ingredient',
  standalone: true,
  imports: [],
  templateUrl: './ingredient.component.html',
  styleUrl: './ingredient.component.css'
})
export class IngredientComponent {

  constructor(private service:IngredientService){}
  
  @Input() ingredient:Ingredients|null = null

  ngOnInit(){
    this.getIngredient();
  }


  getIngredient(){
  
  }

  
}
