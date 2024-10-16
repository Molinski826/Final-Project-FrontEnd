import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ingredients } from '../models/ingredients';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { SearchResults } from '../models/search-results';
import { Recipes } from '../models/recipes';
import { IngredientDetails } from '../models/ingredient-details';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  url:string = environment.apiDomain;
  constructor(private http:HttpClient) { }

  getIngredient(id:number, amount:number = 0, unit:string = ""):Observable<IngredientDetails>{
    return this.http.get<IngredientDetails>(`${this.url}/api/ingredient/${id}?amount=${amount}&unit=${unit}`);
  }

  searchIngredient(name:string):Observable<SearchResults>
{
  console.log(name);
  return this.http.get<SearchResults>(`${this.url}/api/search/${name}`)
}

	submitRecipe(recipe:Recipes) : Observable<object> {
		console.log(recipe);
		return this.http.post(`${this.url}/api/Recipes`, recipe);
	}

  getRecipes():Observable<Recipes[]>{
    return this.http.get<Recipes[]>(`${this.url}/api/Recipes`);
  }

  getRecipe(id:string):Observable<Recipes>{
    return this.http.get<Recipes>(`${this.url}/api/Recipes/${id}`);
  }
}
