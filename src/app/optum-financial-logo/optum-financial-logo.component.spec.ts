import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptumFinancialLogoComponent } from './optum-financial-logo.component';

describe('OptumFinancialLogoComponent', () => {
  let component: OptumFinancialLogoComponent;
  let fixture: ComponentFixture<OptumFinancialLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptumFinancialLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptumFinancialLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
