import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPatientComponent } from './report-patient.component';

describe('ReportPatientComponent', () => {
  let component: ReportPatientComponent;
  let fixture: ComponentFixture<ReportPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
