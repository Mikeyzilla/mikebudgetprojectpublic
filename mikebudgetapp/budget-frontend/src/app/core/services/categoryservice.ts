import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../shared/models/category';

@Injectable({
  providedIn: 'root'
})

export class Categoryservice {
  constructor(private http: HttpClient) {}

  getAllCategoriesByAId(budgetId: number): Observable<Category[]> {
    return this.http.get<Category[]>(`http://localhost:9000/budgets/${budgetId}/categories`);
  }

  getCategoryByAId(budgetId: number, categoryId: number): Observable<Category> {
    return this.http.get<Category>(`http://localhost:9000/budgets/${budgetId}/categories/${categoryId}`);
  }

}
