import { TestBed } from '@angular/core/testing';

import { BudgetSessionService } from './budget-session-service';

describe('BudgetSessionService', () => {
  let service: BudgetSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
