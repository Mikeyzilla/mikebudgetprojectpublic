import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoryentry } from '../../shared/models/categoryentry';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Categoryentryservice {
   constructor(private http: HttpClient) {}

  addEntryToCategory(categoryId: number, categoryEntry: Categoryentry): Observable<void> {
    return this.http.post<void>(`http://localhost:9000/categories/${categoryId}/entries`, categoryEntry);
  }

  getEntriesWithinSpecifiedRange(categoryId: number, start: string, end: string): Observable<Categoryentry[]> {
    return this.http.get<Categoryentry[]>(`http://localhost:9000/categories/${categoryId}/entries?start=${start}&end=${end}`);
  }

  updateAnEntry(categoryId: number, entryId: number, categoryEntry: Categoryentry): Observable<void> {
    return this.http.put<void>(`http://localhost:9000/categories/${categoryId}/entries/${entryId}`, categoryEntry);
  }

  deleteAnEntry(entryId: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:9000/entries/${entryId}`);
  }

}