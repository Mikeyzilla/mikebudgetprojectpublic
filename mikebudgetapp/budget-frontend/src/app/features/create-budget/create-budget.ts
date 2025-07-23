import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BudgetComponent } from '../../components/budget-component/budget-component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-budget',
  standalone: true,
  imports: [CommonModule, BudgetComponent, FormsModule],
  templateUrl: './create-budget.html',
  styleUrl: './create-budget.scss'
}) export class CreateBudget {
  isFormComplete: boolean = false;
  introFormField = {
    income: '',
    occupation: '',
    dependents: '',
    location: ''
  }

  verifyIntroComplete(): boolean {
    if (this.introFormField.dependents == '' || this.introFormField.occupation == '' || this.introFormField.income == '' || this.introFormField.location == '') {
      this.isFormComplete = false;
    } else {
      this.isFormComplete = true;
    }
    return this.isFormComplete;
  }
}
