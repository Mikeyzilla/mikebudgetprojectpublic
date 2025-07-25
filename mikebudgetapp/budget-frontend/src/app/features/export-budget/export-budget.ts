import { Component, Injectable } from '@angular/core';
import { UserSessionService } from '../../core/services/user-session-service';
import { UserService } from '../../core/services/userservice';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-export-budget',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [UserSessionService, UserService, HttpClient],
  templateUrl: './export-budget.html',
  styleUrl: './export-budget.scss'
})

export class ExportBudget {
  constructor(private userSessionService: UserSessionService, private userService: UserService) {}

  username = "";

  ngOnInit(): void {
    this.giveNameOfUser();
  }

  giveNameOfUser(): void {
    const theUserId = this.userSessionService.getOurUserId();
    if (theUserId) {
        this.userService.getAUserById(theUserId).subscribe({
        next: (user) => {
          this.username = user.username;
        }
      });
    }
  }

}
