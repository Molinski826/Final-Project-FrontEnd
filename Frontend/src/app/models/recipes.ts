import { Ingredients } from "./ingredients";
import { Users } from "./users";

export interface Recipes {
    id:number;
    name:string;
    userid:Number;
	ingredients: Ingredients[];
}
