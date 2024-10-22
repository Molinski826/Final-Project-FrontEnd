import { RecipeResults } from "./recipe-results";

export interface RecipeSearchResults {
    "results":RecipeResults[],
    "offset":number,
    "number":number,
    "totalResults":number
}
