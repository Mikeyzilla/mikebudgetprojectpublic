import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserSessionService } from '../../core/services/user-session-service';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.scss'
})
export class NavigationBar {
  constructor(private router: Router, private userSessionService: UserSessionService) {}

  get currentRoute(): string {
    return this.router.url;
  }

  checkIfLoggedIn(): boolean {
    let isLoggedIn = false;
    if (this.userSessionService.getOurUserId() != 0) {
      isLoggedIn = true;
    }
    return isLoggedIn;
  }

}
