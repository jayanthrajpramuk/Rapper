import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaScheduleInterviewComponent } from './ta-schedule-interview.component';

describe('TaScheduleInterviewComponent', () => {
  let component: TaScheduleInterviewComponent;
  let fixture: ComponentFixture<TaScheduleInterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaScheduleInterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaScheduleInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
