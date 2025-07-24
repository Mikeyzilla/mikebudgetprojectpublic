import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoryentry } from '../../shared/models/categoryentry';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Categoryentryservice {
   constructor(private http: HttpClient) {}

  getEntriesWithinSpecifiedRange(categoryId: number, start: string, end: string): Observable<Categoryentry[]> {
    return this.http.get<Categoryentry[]>(`http://localhost:9000/categories/${categoryId}/entries?start=${start}&end=${end}`);
  }

}