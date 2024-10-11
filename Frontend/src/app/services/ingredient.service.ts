import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ingredients } from '../models/ingredients';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  url:string = "https://localhost:7242/";
  constructor(private http:HttpClient) { }

  getIngredient(id:number):Observable<Ingredients>{
    return this.http.get<Ingredients>(`${this.url}api/ingredient/${id}`);
  }



}
