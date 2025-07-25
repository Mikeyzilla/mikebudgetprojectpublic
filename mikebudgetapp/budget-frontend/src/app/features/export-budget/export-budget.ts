import { Component, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { UserSessionService } from '../../core/services/user-session-service';
import { UserService } from '../../core/services/userservice';
import { CommonModule } from '@angular/common';
import { BudgetSessionService } from '../../core/services/budget-session-service';
import { Budgetservice } from '../../core/services/budgetservice';
import { Budget } from '../../shared/models/budget';
import { Categoryservice } from '../../core/services/categoryservice';
import { NgChartsModule } from 'ng2-charts';
import { ChartData } from 'chart.js';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-export-budget',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './export-budget.html',
  styleUrl: './export-budget.scss'
})

export class ExportBudget {
  constructor(
    private userSessionService: UserSessionService, private budgetSessionService: BudgetSessionService) {}
  private budgetService = inject(Budgetservice);
  private categoryService = inject(Categoryservice);
  private userService = inject(UserService);

  categorySummaries: {
    name: string,
    ideal: number,
    actual: number,
    percentDiff: number
  }[] = [];

  username = "";
  salary = 0;
  storedBudget!: Budget;
  chartLabels: string[] = ["Food", "Rent", "Phone", "Car", "Health", "Fun"];

  ngOnInit(): void {
      this.giveNameOfUser();
      this.viewAndProcessBudget();
     // this.exportToPDF();
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

  viewAndProcessBudget() {
    this.budgetService.getABudgetById(
    this.userSessionService.getOurUserId(),
    this.budgetSessionService.getOurBudgetId()
  ).subscribe({
    next: (budget) => {
      this.storedBudget = budget;
      this.salary = budget.totalIncome;
      const actualMap = this.calculateActual(); 
      this.categoryService.getAllCategoriesByAId(budget.id).subscribe({
        next: (categories) => {
          for (let category of categories) {
            const ideal = this.calculateIdeal(category.name, this.salary);
            const actual = actualMap.get(category.name) ?? 0;
            const percentDiff = this.calculatePercentDifference(actual, ideal);
            this.categorySummaries.push({
              name: category.name,
              ideal,
              actual,
              percentDiff
            });
          }}
        })
      }
    })
  }

  calculateActual(): Map<string, number> {
    const totalToCategoryMap = new Map<string, number>();

    for (let category of this.storedBudget.categories) {
      let totalForCategory = 0;
      for (let entry of category.entries) {
        totalForCategory += entry.amount;
        totalToCategoryMap.set(category.name, totalForCategory) 
      }
    }
    return totalToCategoryMap;
  }

  calculateIdeal(namedCategory: string, salary: number): number {
    let idealAmount = 0;
    if (namedCategory == "Food") {
      idealAmount = salary * .15;
    } else if (namedCategory == "Rent") {
      idealAmount = salary * .30;
    } else if (namedCategory == "Phone") {
      idealAmount = salary * .03;
    } else if (namedCategory == "Car") {
      idealAmount = salary * .12;
    } else if (namedCategory =="Health") {
      idealAmount = salary * .10;
    } else {
      idealAmount = salary * .10;
    }
    return idealAmount;
  }

  calculatePercentDifference(actualSpent: number, idealSpending: number): number  {
    return idealSpending - actualSpent;
  }

 
  get idealChartData(): ChartData<'pie', number[], string> {
    return {
      labels: this.categorySummaries.map(summary => summary.name),
      datasets: [
        {
          data: this.categorySummaries.map(summary => summary.ideal),
          label: 'Ideal Spending'
        }
      ]
    };
  }

  get actualChartData(): ChartData<'pie', number[], string> {
    return {
      labels: this.categorySummaries.map(summary => summary.name),
      datasets: [
        {
          data: this.categorySummaries.map(summary => summary.actual),
          label: 'Actual Spending'
        }
      ]
    };
  }
  //exportToPDF() {}

}
