import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaJobProfileComponent } from './ta-job-profile.component';

describe('TaJobProfileComponent', () => {
  let component: TaJobProfileComponent;
  let fixture: ComponentFixture<TaJobProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaJobProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaJobProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
