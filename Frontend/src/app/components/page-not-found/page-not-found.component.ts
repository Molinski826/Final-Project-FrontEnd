import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {
	taglines: string[] = [
		"Sorry loser, try again!",
		"Oopsies",
		"Skill issue",
		"Womp womp",
		"OwO wats dis?",
		"Server did a fucky-wucky"
	];

	getTagline() : string {
		return this.taglines[Math.floor(Math.random() * this.taglines.length)];
	}
}
