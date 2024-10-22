import { Component, EventEmitter, Output } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
import { FormsModule } from '@angular/forms';
import { LoadingOverlayComponent } from "../loading-overlay/loading-overlay.component";
import { RegistrationInfo } from '../../models/registration-info';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, LoadingOverlayComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  constructor(private service:IngredientService) { }

  email:string = "";
  password:string = "";
  confirm:string = "";
  passwordError:string[] = [];

  symbolRegex:RegExp = new RegExp("[^a-zA-Z0-9]");
  numberRegex:RegExp = new RegExp("[0-9]");
  upperLowerRegex:RegExp = new RegExp("([a-z].*[A-Z])|([A-Z].*[a-z])");

  loading:boolean = false;

  @Output() registered:EventEmitter<RegistrationInfo> = new EventEmitter<RegistrationInfo>();

  register():void {
	this.validatePassword();
	this.loading = true;
	if (this.passwordError.length == 0 && this.confirm == this.password) {
    	this.service.register(this.email, this.password).subscribe({
			complete: () => {
				this.loading = false;
				this.registered.emit({registered: true, email: this.email, password: this.password});
			},
			error: err => {
				this.loading = false;
				console.log("Registration failed: " + err + "\n[REPLACE ME]");
			}
		});
	}
  }

  validatePassword() : void {
	let errors: string[] = [];
	if (this.password.length < 6) {
		errors.push("Must be at least 6 characters");
	}
	if (!this.symbolRegex.test(this.password)) {
		errors.push("Must contain a symbol");
	}
	if (!this.upperLowerRegex.test(this.password)) {
		errors.push("Must contain an uppercase and lowercase letter");
	}
	if (!this.numberRegex.test(this.password)) {
		errors.push("Must contain a number");
	}
	this.passwordError = errors;
  }

  goBack() : void {
	this.registered.emit({registered: false, email: this.email, password: this.password});
  }
}
