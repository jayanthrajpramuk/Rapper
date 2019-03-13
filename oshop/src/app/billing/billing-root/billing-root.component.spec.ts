import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingRootComponent } from './billing-root.component';

describe('BillingRootComponent', () => {
  let component: BillingRootComponent;
  let fixture: ComponentFixture<BillingRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
