import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IngredientComponent } from './components/ingredient/ingredient.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IngredientComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend';
}
