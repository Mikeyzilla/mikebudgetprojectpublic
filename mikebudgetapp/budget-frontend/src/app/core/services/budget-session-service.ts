import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BudgetSessionService {
  private ourBudgetId!: number;

  setOurBudgetId(ourBudgetId: number): void {
    this.ourBudgetId = ourBudgetId;
  }

  getOurBudgetId() {
    return this.ourBudgetId;
  }

}
