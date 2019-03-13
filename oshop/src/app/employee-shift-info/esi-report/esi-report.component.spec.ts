import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsiReportComponent } from './esi-report.component';

describe('EsiReportComponent', () => {
  let component: EsiReportComponent;
  let fixture: ComponentFixture<EsiReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsiReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsiReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
