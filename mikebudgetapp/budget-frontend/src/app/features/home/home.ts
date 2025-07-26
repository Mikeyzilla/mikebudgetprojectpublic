import { Component, DOCUMENT, Inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserSessionService } from '../../core/services/user-session-service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  constructor(private router: Router,  @Inject(DOCUMENT) private document: Document, private userSessionService: UserSessionService) {}

  goToMakeBudget(): void {
    this.router.navigate(['/makeBudget']);
  }

  ngOnInit() {
    this.document.body.classList.add('HideOverflow');
  }
  
  ngOnDestroy() {
    this.document.body.classList.remove('HideOverflow')
  }
  
}