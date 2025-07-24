import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Budgetservice } from '../../core/services/budgetservice';
import { Budget } from '../../shared/models/budget';
import { Category } from '../../shared/models/category';
import { randomFill } from 'node:crypto';
import { FormsModule } from '@angular/forms';
import { UserSessionService } from '../../core/services/user-session-service';

@Component({
  selector: 'app-budget-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './budget-component.html',
  styleUrl: './budget-component.scss'
})
export class BudgetComponent {
  constructor(private budgetService: Budgetservice, private userSessionService: UserSessionService) {}

  categories = ["Food", "Rent", "Phone", "Car", "Health", "Fun"];
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  amounts: {
    [month: string]: {
      [week: string]: {
        [category: string]: string;
      };
    };
  } = {};

  @Input() MainIncome: number = 0;

  giveTheNextMonth(monthName: string): string {
    for (let i = 0; i < this.months.length; i++) {
      if (this.months[i] === monthName) {
        if (i === this.months.length - 1) {
          return this.months[0];
        } else {
          return this.months[i + 1];
        }
      }
    }
   return "";
  }

  getNextMonths(count: number): string[] {
    let currentMonth = this.months[new Date().getMonth()]; 
    const nextMonthArray: string[] = [];

    for (let i = 0; i < count; i++) {
      nextMonthArray.push(currentMonth);
      currentMonth = this.giveTheNextMonth(currentMonth);
    }

    return nextMonthArray;
  }

  monthNumberMap: {[key: string]: number } = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11
  };

  monthWeekMap: { [key: string]: number } = {
    January: 4,
    February: 3,
    March: 4,
    April: 4,
    May: 4,
    June: 4,
    July: 4,
    August: 4,
    September: 4,
    October: 4,
    November: 4,
    December: 4
  };

  weeksInAnyMonth(month: string): string[] {
    const weeks: string[] = [];
    const numberOfWeeks = this.monthWeekMap[month];
    for (let i = 1; i <= numberOfWeeks; i++) {
      weeks.push("Week " + i);
    }
    return weeks;
  }

  budgetSections = this.getNextMonths(1);

  ngOnInit() {
    this.initializeAmounts();
  }

  initializeAmounts() {
    this.budgetSections.forEach(month => {
      if (!this.amounts[month]) {
        this.amounts[month] = {};
      }
      this.weeksInAnyMonth(month).forEach(week => {
        if (!this.amounts[month][week]) {
          this.amounts[month][week] = {};
        }
        this.categories.forEach(category => {
          if (!this.amounts[month][week][category]) {
            this.amounts[month][week][category] = '';
          }
        });
      });
    });
  }

  addBudgetSection() {
    const monthWeWereAt = this.budgetSections[this.budgetSections.length - 1];
    const newMonth = this.giveTheNextMonth(monthWeWereAt);
    this.budgetSections.push(newMonth);
    this.initializeAmounts();
  }

  removeBudgetSection() {
    if (this.budgetSections.length > 1) {
      this.budgetSections.pop();
      this.initializeAmounts();
    }
  }

  submitBudget(aUserId: number): void {
    const budget = {
      userId: aUserId,
      totalIncome: this.MainIncome,
      createdAt: new Date().toISOString(),
      categories: this.categories.map(category => ({
        name: category,
        entries: this.budgetSections.flatMap(month =>
          this.weeksInAnyMonth(month).map(week => ({
            amount: this.getAmountFor(category, month, week),
            entryDate: this.getDateFor(month, week)
          }))
        )
      }))
    } as unknown as Budget;

    this.budgetService.createUserBudget(aUserId, budget).subscribe({
      next: () => console.log('Budget created successfully!'),
      error: err => console.error('Budget creation failed: ', err)
    });
  }
  
    
  getAmountFor(categoryName: string, month: string, week: string): string {
    return this.amounts[month]?.[week]?.[categoryName] ?? '';
  }

  getDateFor(month: string, week: string): string {
    const dateOfEntry = new Date();
    const currentYear = new Date().getFullYear();
    dateOfEntry.setFullYear(currentYear);
    let weekNumber = 0;
    let monthNumber = 0;
    monthNumber = this.monthNumberMap[month];
    let newWeekString = week.trim();
    const match = newWeekString.match(/[1-4]/);
    if (match) {
      weekNumber = parseInt(match[0]);
    }
    const day = weekNumber * 7;
    dateOfEntry.setMonth(monthNumber)
    dateOfEntry.setDate(day);
    return dateOfEntry.toISOString();
  }

}
