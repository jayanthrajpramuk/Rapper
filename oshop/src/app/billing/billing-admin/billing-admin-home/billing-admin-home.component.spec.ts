import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingAdminHomeComponent } from './billing-admin-home.component';

describe('BillingAdminHomeComponent', () => {
  let component: BillingAdminHomeComponent;
  let fixture: ComponentFixture<BillingAdminHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingAdminHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingAdminHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
