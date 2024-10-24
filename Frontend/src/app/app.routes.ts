import { Routes } from '@angular/router';
import { DisplayRecipeComponent } from './components/display-recipe/display-recipe.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { AccountPageComponent } from './components/account-page/account-page.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { MeetTheTeamComponent } from './components/meet-the-team/meet-the-team.component';
import { PersonalizedRecipesComponent } from './components/personalized-recipes/personalized-recipes.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
	{path:"Recipe/:id/edit", component:RecipeFormComponent},
    {path:"Recipe/:id", component: DisplayRecipeComponent}, 
    {path:"Recipe", component:RecipeFormComponent},
    {path:"MyRecipes", component:RecipeListComponent},
	{path:"MyAccount", component:AccountPageComponent},
	{path:"Search", component:SearchPageComponent},
    {path:"Ingredient/:id", component: IngredientComponent},
    {path:"MeetTheTeam", component:MeetTheTeamComponent},
    {path:"PersonalizedRecipes", component:PersonalizedRecipesComponent},
    {path: "**", component:PageNotFoundComponent} 
];
