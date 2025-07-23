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

  changeIncomeTextToValidInput(text: string): number {
    let newIncome = 0;

    if (/[A-Za-z]/.test(text)) return 0;
    
    let validIncomeText = text.replace(/^\$/, '').replace(/\$$/, '').trim();
    newIncome = parseFloat(validIncomeText.replace(/,/g, ''));

    return newIncome;
  }

  returnNumericalDependents(text: string): number {
    return parseInt(text);
  } 

  verifyOccupationAndLocationAreValid(text: string): boolean {
    let newText = text.trim();
    if (/[0-9!@#$%^&*()-_+={}?:~]/.test(newText)) return false;
    if (newText.length < 3) return false;
    return true;
  }


  verifyIntroComplete(): boolean {
    const income = this.changeIncomeTextToValidInput(this.introFormField.income);
    const isIncomeValid = !isNaN(income);

    const dependentsNumber = this.returnNumericalDependents(this.introFormField.dependents);
    const isDependentsValid = !isNaN(dependentsNumber);

    const locationValid = this.verifyOccupationAndLocationAreValid(this.introFormField.location);
    const occupationValid = this.verifyOccupationAndLocationAreValid(this.introFormField.occupation);

    this.isFormComplete = isIncomeValid && isDependentsValid && locationValid && occupationValid;

    return this.isFormComplete;
  }

}
