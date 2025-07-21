import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportBudget } from './export-budget';

describe('ExportBudget', () => {
  let component: ExportBudget;
  let fixture: ComponentFixture<ExportBudget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportBudget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportBudget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
