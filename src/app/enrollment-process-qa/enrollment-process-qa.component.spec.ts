import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentProcessQAComponent } from './enrollment-process-qa.component';

describe('EnrollmentProcessQAComponent', () => {
  let component: EnrollmentProcessQAComponent;
  let fixture: ComponentFixture<EnrollmentProcessQAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollmentProcessQAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollmentProcessQAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
