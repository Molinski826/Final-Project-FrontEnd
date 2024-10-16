import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ingredients } from '../models/ingredients';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { SearchResults } from '../models/search-results';
import { Recipes } from '../models/recipes';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  url:string = environment.apiDomain;
  constructor(private http:HttpClient) { }

  getIngredient(id:number):Observable<Ingredients>{
    return this.http.get<Ingredients>(`${this.url}/api/ingredient/${id}`);
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

}
