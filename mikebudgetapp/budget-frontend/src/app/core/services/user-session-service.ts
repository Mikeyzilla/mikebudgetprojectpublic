import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserSessionService {
  private ourUserId!: number;

  setOurUserId(ourUserId: number): void {
    this.ourUserId = ourUserId;
  }

  getOurUserId(): number {
    return this.ourUserId;
  }

  wipeUserId(ourUserId: number): void {
    this.ourUserId = 0;
  }

}
