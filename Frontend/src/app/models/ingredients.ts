import { Recipes } from "./recipes";

export interface Ingredients {
    id:number;
    recipeId:Recipes;
    productId:number;
    name:string;
    amount:number;
    unit:string;
}
