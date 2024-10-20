import { Routes } from '@angular/router';
import { DisplayRecipeComponent } from './components/display-recipe/display-recipe.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"Recipe/:id", component: DisplayRecipeComponent}, 
    {path:"Recipe", component:RecipeFormComponent},
    {path:"MyRecipes", component:RecipeListComponent},
    {path:"Login", component:LoginComponent},
    {path:"Register", component:RegisterComponent},
    {path: "**", component:PageNotFoundComponent} 
];
