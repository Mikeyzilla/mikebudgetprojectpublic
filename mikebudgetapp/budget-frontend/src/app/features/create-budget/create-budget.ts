import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BudgetComponent } from '../../components/budget-component/budget-component';

@Component({
  selector: 'app-create-budget',
  imports: [CommonModule, BudgetComponent],
  templateUrl: './create-budget.html',
  styleUrl: './create-budget.scss'
}) export class CreateBudget {

}
