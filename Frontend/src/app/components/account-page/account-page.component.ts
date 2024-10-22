import { Component } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
import { Users } from '../../models/users';
import { FormsModule } from '@angular/forms';
import { Intolerances } from '../../models/intolerances';

@Component({
  selector: 'app-account-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './account-page.component.html',
  styleUrl: './account-page.component.css'
})
export class AccountPageComponent {
	constructor(private service:IngredientService) {}

	user: Users = {} as Users;
	formUser: Users = {... this.user};
	editing: boolean = false;

	intolerance:Intolerances = {} as Intolerances; 
	intolerant:Intolerances = {...this.intolerance};

	ngOnInit() {
		this.service.getUser().subscribe(
			r => this.user = r
		);
	}

	edit() {
		if (this.editing) {
			this.discardChanges();
		}
		else {
			this.formUser = {... this.user};
			this.editing = true;
		}
	}

	discardChanges() {
		this.editing = false;
		this.formUser = {... this.user};
	}

	saveChanges() {
		this.service.updateUser(this.formUser).subscribe(r => {
			this.user = r;
			this.editing = false;
			this.formUser = {... r};
		});
	}

	showMeRecipes() {
		// this.service.getPersonalizedRecipes(this.intolerant).subscribe(diet => {
			
		// }
		// )
	}
}
