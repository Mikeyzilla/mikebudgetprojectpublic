import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Budget } from '../../shared/models/budget';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Budgetservice {
  constructor(private http: HttpClient) {}
  

  createUserBudget(userId: number, budget: Budget): Observable<HttpResponse<void>> {
    return this.http.post<void>(`http://localhost:9000/users/${userId}/budgets`, budget, { 
      observe: 'response' 
    });
  }

  getEveryBudgetById(userId: number): Observable<Budget[]> {
    return this.http.get<Budget[]>(`http://localhost:9000/users/${userId}/budgets`);
  }

  getABudgetById(userId: number, budgetId: number): Observable<Budget> {
    return this.http.get<Budget>(`http://localhost:9000/users/${userId}/budgets/${budgetId}`);
  }

}