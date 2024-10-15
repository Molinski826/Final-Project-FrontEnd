import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ingredients } from '../../models/ingredients';
import { IngredientService } from '../../services/ingredient.service';
import { FormsModule } from '@angular/forms';
import { SearchResults } from '../../models/search-results';
import { Results } from '../../models/results';

@Component({
  selector: 'app-search-ingredients',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-ingredients.component.html',
  styleUrl: './search-ingredients.component.css'
})
export class SearchIngredientsComponent {
@Input() search: string = "";
@Output() selected:EventEmitter<Results> = new EventEmitter<Results>();

constructor(private service:IngredientService){}

results:SearchResults = {} as SearchResults;

ngOnChanges(){
  this.service.searchIngredient(this.search).subscribe(response => this.results= response );
}

addIngredient(name:string){
  this.selected.emit(this.results.results.find(response => response.name == name));
}

}
