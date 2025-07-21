import { TestBed } from '@angular/core/testing';

import { Categoryentryservice } from './categoryentryservice';

describe('Categoryentryservice', () => {
  let service: Categoryentryservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Categoryentryservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
