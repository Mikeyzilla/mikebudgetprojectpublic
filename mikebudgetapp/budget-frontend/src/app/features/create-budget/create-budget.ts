import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { BudgetComponent } from '../../components/budget-component/budget-component';
import { FormsModule } from '@angular/forms';
import { UserSessionService } from '../../core/services/user-session-service';
import { UserService } from '../../core/services/userservice';

@Component({
  selector: 'app-create-budget',
  standalone: true,
  imports: [CommonModule, BudgetComponent, FormsModule],
  templateUrl: './create-budget.html',
  styleUrls: ['./create-budget.scss', '../../sharedStyles/Fields.scss']
}) export class CreateBudget {
  constructor(private userSessionService: UserSessionService) {}

  @ViewChild(BudgetComponent) budgetComponent!: BudgetComponent;

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

  get incomeNumber(): number {
    return this.changeIncomeTextToValidInput(this.introFormField.income);
  }

  returnNumericalDependents(text: string): number {
    return parseInt(text);
  } 

  verifyOccupationAndLocationAreValid(text: string): boolean {
    let newText = text.trim();
    if (/[^a-zA-Z\s]/.test(newText)) return false;
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

  submitOurBudget() {
    this.budgetComponent.submitBudget(this.userSessionService.getOurUserId());
    console.log("Success?")
    
  }

  isLoggedIn(): boolean {
    return this.userSessionService.getOurUserId() !== 0 && this.userSessionService.getOurUserId() != null;
  }

  ngOnInit() {
    console.log(this.userSessionService.getOurUserId())
  }

}
