import { Component, Injectable } from '@angular/core';
import { UserSessionService } from '../../core/services/user-session-service';
import { UserService } from '../../core/services/userservice';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { BudgetSessionService } from '../../core/services/budget-session-service';
import { Budgetservice } from '../../core/services/budgetservice';
import { Budget } from '../../shared/models/budget';

@Component({
  selector: 'app-export-budget',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [UserSessionService, UserService, HttpClient],
  templateUrl: './export-budget.html',
  styleUrl: './export-budget.scss'
})

export class ExportBudget {
  constructor(private userSessionService: UserSessionService, private userService: UserService, private budgetSessionService: BudgetSessionService, private budgetService: Budgetservice) {}

  username = "";
  private storedBudget: Budget;
  salary = 0;

  ngOnInit(): void {
    this.giveNameOfUser();
    this.budgetService.getABudgetById(
    this.userSessionService.getOurUserId(),
    this.budgetSessionService.getOurBudgetId()
  ).subscribe({
    next: (budget) => {
      this.storedBudget = budget; 
      this.salary = this.storedBudget.totalIncome;
      for (let dataPoint of this.storedBudget.categories) {
        for (let specificData of dataPoint.entries) {
            //extract all data entries by using nested loops
        }
      }
      // perform calculations using a helper method on them to calculate the "ideal" budget 
      // allocation per category based on income, and then to 
      //figure out the difference between the user's actual budget allocation and that.
      //finally, display that information on the html, and then make a pie chart of the user's spending as well - one for the ideal, one for the actual.
      //then implement export to PDF and we're good.
    }})};

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

  calculateActual(userAmount: number): number {

  }

  calculateIdeal(idealAmount: number, salary: number): number {

  }

}
