import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginComponent } from "../login/login.component";
import { IngredientService } from '../../services/ingredient.service';
import { WelcomeComponent } from "../welcome/welcome.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, LoginComponent, WelcomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

	constructor(private service:IngredientService) {}

	loggedIn(): boolean {
		return this.service.isLoggedIn;
	}
}
