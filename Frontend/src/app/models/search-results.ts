import { Results } from "./results";

export interface SearchResults {
    results:Results[];
    offset:number;
    number:number;
    totalResults:number;
}
