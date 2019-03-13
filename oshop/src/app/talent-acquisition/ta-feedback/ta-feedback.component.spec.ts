import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaFeedbackComponent } from './ta-feedback.component';

describe('TaFeedbackComponent', () => {
  let component: TaFeedbackComponent;
  let fixture: ComponentFixture<TaFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
