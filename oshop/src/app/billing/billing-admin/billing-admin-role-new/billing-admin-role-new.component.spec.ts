import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingAdminRoleNewComponent } from './billing-admin-role-new.component';

describe('BillingAdminRoleNewComponent', () => {
  let component: BillingAdminRoleNewComponent;
  let fixture: ComponentFixture<BillingAdminRoleNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingAdminRoleNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingAdminRoleNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
