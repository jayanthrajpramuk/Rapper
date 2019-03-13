import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaReportsComponent } from './ta-reports.component';

describe('TaReportsComponent', () => {
  let component: TaReportsComponent;
  let fixture: ComponentFixture<TaReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
