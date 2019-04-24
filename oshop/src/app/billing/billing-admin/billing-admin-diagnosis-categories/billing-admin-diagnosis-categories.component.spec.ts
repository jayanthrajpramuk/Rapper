import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingAdminDiagnosisCategoriesComponent } from './billing-admin-diagnosis-categories.component';

describe('BillingAdminDiagnosisCategoriesComponent', () => {
  let component: BillingAdminDiagnosisCategoriesComponent;
  let fixture: ComponentFixture<BillingAdminDiagnosisCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingAdminDiagnosisCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingAdminDiagnosisCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
