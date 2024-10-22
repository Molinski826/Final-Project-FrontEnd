import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { SearchResults } from '../models/search-results';
import { Recipes } from '../models/recipes';
import { IngredientDetails } from '../models/ingredient-details';
import { ApiClientService } from './api-client.service';
import { CookieService } from 'ngx-cookie-service';
import { Users } from '../models/users';
import { RecipeSearchResults } from '../models/recipe-search-results';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  	url:string = environment.apiDomain;
	isLoggedIn: boolean;

  	constructor(private http:HttpClient, private api:ApiClientService, private cookies:CookieService) {
		this.isLoggedIn = this.cookies.check(".AspNetCore.Identity.Application");
	}

  	getIngredient(id:number, amount:number = 0, unit:string = ""):Observable<IngredientDetails> {
    	return this.http.get<IngredientDetails>(`${this.url}/api/ingredient/${id}?amount=${amount}&unit=${unit}`);
  	}

	getPersonalizedRecipes(diet:string = "", intolerances:string = "", number:number = 100):Observable<RecipeSearchResults> {
		return this.http.get<RecipeSearchResults>(`${this.url}/api/recipes/complexSearch?number=${number}&diet=${diet}&intolerances=${intolerances}`)
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

	login(email:string, password:string): Observable<Object> {
		return this.http.post(`${this.url}/api/user/login?useCookies=true`, {email: email, password: password}, {withCredentials: true})
		.pipe(tap(
			_ => this.isLoggedIn = true
		));
	}

	register(email:string, password:string): Observable<Object> {
		return this.http.post(`${this.url}/api/user/register`, {email: email, password: password});
	}

	logout(): void {
		this.cookies.delete(".AspNetCore.Identity.Application");
		this.isLoggedIn = false;
	}

	getUser(): Observable<Users> {
		return this.api.get(`${this.url}/api/user`);
	}

	updateUser(user: Users) : Observable<Users> {
		return this.api.put(`${this.url}/api/user`, user);
	}

	deleteRecipe(id: number) : Observable<Object> {
		return this.api.delete(`${this.url}/api/Recipes/${id}`);
	}
}
