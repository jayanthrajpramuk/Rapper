import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingAdminRootComponent } from './billing-admin-root.component';

describe('BillingAdminRootComponent', () => {
  let component: BillingAdminRootComponent;
  let fixture: ComponentFixture<BillingAdminRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingAdminRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingAdminRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
