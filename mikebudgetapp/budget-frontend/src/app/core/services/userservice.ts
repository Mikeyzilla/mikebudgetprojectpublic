import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../shared/models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) {}

  signUpUser(user: User): Observable<void> {
    return this.http.post<void>('http://localhost:9000/users', user);
  }

  logInAUser(user: Partial<User>): Observable<void> {
    return this.http.post<void>('http://localhost:9000/login', user);
  }

  getAUserById(userId: number): Observable<User> {
    return this.http.get<User>(`http://localhost:9000/getUserById?userId=${userId}`);
  }

  updateUser(user: {username: string}): Observable<User> {
    return this.http.put<User>('http://localhost:9000/updateUserById', user);
  }

}