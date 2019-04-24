import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingAdminRoleEditComponent } from './billing-admin-role-edit.component';

describe('BillingAdminRoleEditComponent', () => {
  let component: BillingAdminRoleEditComponent;
  let fixture: ComponentFixture<BillingAdminRoleEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingAdminRoleEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingAdminRoleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
