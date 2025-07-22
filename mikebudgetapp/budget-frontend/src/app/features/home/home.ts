import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  constructor(private router: Router) {}

  goToMakeBudget(): void {
    this.router.navigate(['/makeBudget']);
  }
  
}