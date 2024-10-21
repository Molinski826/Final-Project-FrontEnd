import { Component } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  constructor(private service:IngredientService) { }

  email:string = "";
  password:string = "";
  confirm:string = "";

  register():void {
    this.service.register(this.email, this.password).subscribe();
  }
}
