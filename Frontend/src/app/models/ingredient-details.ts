import { Nutrient } from "./nutrient";
import { Nutrition } from "./nutrition";

export interface IngredientDetails {
    
        "id":number,
        "original":string,
        "originalName":string,
        "name":string,
        "amount":number,
        "unit":string,
        "unitShort":string,
        "unitLong":string,
        "possibleUnits":string [],
        "consistency":string,
        "shoppingListUnits":string [],
        "aisle":string,
        "image":string,
        "nutrition":Nutrition,
        "categoryPath":string []
}
