import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingAdminRolesComponent } from './billing-admin-roles.component';

describe('BillingAdminRolesComponent', () => {
  let component: BillingAdminRolesComponent;
  let fixture: ComponentFixture<BillingAdminRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingAdminRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingAdminRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
