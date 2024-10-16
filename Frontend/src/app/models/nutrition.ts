import { CaloricBreakdown } from "./caloric-breakdown";
import { Nutrient } from "./nutrient";

export interface Nutrition {
    
        "nutrients":Nutrient [],
        "properties":Nutrient[],
        "flavonoids":Nutrient [],
        "caloricBreakdown":CaloricBreakdown,
        "weightPerServing":Nutrient
      
      
}
