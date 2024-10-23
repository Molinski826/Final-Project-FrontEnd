import { Ingredients } from "./ingredients";
import { Users } from "./users";

export interface Recipes {
    id:number;
    name:string;
    userid:string | null;
	servings:number;
	recipeIngredients: Ingredients[];
	priority:number;
	carbs:number;
	calories:number;
}
