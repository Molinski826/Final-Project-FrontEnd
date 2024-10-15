import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ingredients } from '../models/ingredients';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  url:string = environment.apiDomain;
  constructor(private http:HttpClient) { }

  getIngredient(id:number):Observable<Ingredients>{
    return this.http.get<Ingredients>(`${this.url}api/ingredient/${id}`);
  }



}
