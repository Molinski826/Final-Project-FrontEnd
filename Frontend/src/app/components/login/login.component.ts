import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {IngredientService} from "../../services/ingredient.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private service:IngredientService) {}

  email:string = "";
  password:string = "";

  login(): void {
    this.service.login(this.email, this.password).subscribe();
  }
}
