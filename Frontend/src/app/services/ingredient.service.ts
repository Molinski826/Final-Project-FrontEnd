import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { SearchResults } from '../models/search-results';
import { Recipes } from '../models/recipes';
import { IngredientDetails } from '../models/ingredient-details';
import { ApiClientService } from './api-client.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  	url:string = environment.apiDomain;
  	constructor(private http:HttpClient, private api:ApiClientService, private cookies:CookieService) { }

  	getIngredient(id:number, amount:number = 0, unit:string = ""):Observable<IngredientDetails> {
    	return this.http.get<IngredientDetails>(`${this.url}/api/ingredient/${id}?amount=${amount}&unit=${unit}`);
  	}

  	searchIngredient(name:string):Observable<SearchResults> {
  		return this.http.get<SearchResults>(`${this.url}/api/search/${name}`)
	}

	submitRecipe(recipe:Recipes) : Observable<object> {
		return this.api.post(`${this.url}/api/Recipes`, recipe);
	}

  	getRecipes():Observable<Recipes[]>{
    	return this.api.get<Recipes[]>(`${this.url}/api/Recipes`);
  	}

  	getRecipe(id:string):Observable<Recipes>{
    	return this.http.get<Recipes>(`${this.url}/api/Recipes/${id}`);
  	}

	isLoggedIn() : boolean {
		return this.cookies.check(".AspNetCore.Identity.Application");
	}

	login(email:string, password:string): Observable<Object> {
		return this.http.post(`${this.url}/api/user/login?useCookies=true`, {email: email, password: password});
	}

	register(email:string, password:string): Observable<Object> {
		return this.http.post(`${this.url}/api/user/register`, {email: email, password: password});
	}

	logout(): void {
		this.cookies.delete(".AspNetCore.Identity.Application");
	}
}
