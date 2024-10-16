import { Ingredients } from "./ingredients";
import { Users } from "./users";

export interface Recipes {
    id:number;
    name:string;
    userid:string | null;
	recipeIngredients: Ingredients[];
}
