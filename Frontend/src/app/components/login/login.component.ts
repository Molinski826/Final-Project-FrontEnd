import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {IngredientService} from "../../services/ingredient.service";
import { RegisterComponent } from "../register/register.component";
import { LoadingOverlayComponent } from "../loading-overlay/loading-overlay.component";
import { RegistrationInfo } from '../../models/registration-info';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RegisterComponent, LoadingOverlayComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private service:IngredientService) {}

  email:string = "";
  password:string = "";
  registering:boolean = false;
  loading:boolean = false;

  login(): void {
	this.loading = true;
    this.service.login(this.email, this.password).subscribe({
		complete: () => {
			this.loading = false;
		},
		error: (err) => {
			this.loading = false;
			console.log("Problem logging in: " + err + "\n [REPLACE ME]");
		}
	});
  }

  showRegistration() : void {
	this.registering = true;
  }

  registrationClosed(info: RegistrationInfo) : void {
	this.registering = false;
	if (info.registered) {
		this.email = info.email;
		this.password = info.password;
		this.login();
	}
  }
}
