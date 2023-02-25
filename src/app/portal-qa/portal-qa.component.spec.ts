import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalQaComponent } from './portal-qa.component';

describe('PortalQaComponent', () => {
  let component: PortalQaComponent;
  let fixture: ComponentFixture<PortalQaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalQaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalQaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
