import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserSessionService {
  private ourUserId!: number;

  setOurUserId(ourUserId: number): void {
    localStorage.setItem('userId', ourUserId.toString());
  }

  getOurUserId(): number {
    if (typeof localStorage !== 'undefined') {
      return Number(localStorage.getItem('userId')) || 0;
    }
    return 0;
  }

  wipeUserId(): void {
    localStorage.removeItem('userId');
  }
}
