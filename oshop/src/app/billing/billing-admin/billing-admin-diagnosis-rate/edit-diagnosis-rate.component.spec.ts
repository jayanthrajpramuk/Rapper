import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDiagnosisRateComponent } from './edit-diagnosis-rate.component';

describe('EditDiagnosisRateComponent', () => {
  let component: EditDiagnosisRateComponent;
  let fixture: ComponentFixture<EditDiagnosisRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDiagnosisRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDiagnosisRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
