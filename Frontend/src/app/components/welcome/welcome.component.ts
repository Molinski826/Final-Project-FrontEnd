import { Component } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
import { Users } from '../../models/users';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
	constructor(private service:IngredientService) {}

	user: Users = {} as Users;

	ngOnInit() {
		this.service.getUser().subscribe(r => this.user = r);
	}

	logout() {
		this.service.logout();
	}
}
