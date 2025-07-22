import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-budget-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './budget-component.html',
  styleUrl: './budget-component.scss'
})
export class BudgetComponent {

  categories = ["Food", "Rent", "Phone", "Car", "Health", "Fun"];
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

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

  addBudgetSection() {
    const monthWeWereAt = this.budgetSections[this.budgetSections.length - 1];
    const newMonth = this.giveTheNextMonth(monthWeWereAt);
    this.budgetSections.push(newMonth);
  }

  removeBudgetSection() {
    if (this.budgetSections.length > 1) {
      this.budgetSections.pop();
    }
  }
}
