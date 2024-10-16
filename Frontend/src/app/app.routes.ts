import { Routes } from '@angular/router';
import { DisplayRecipeComponent } from './components/display-recipe/display-recipe.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:"Recipe/:id", component: DisplayRecipeComponent}, 
    {path: "**", component: AppComponent}

];
