import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsiDetailsComponent } from './esi-details.component';

describe('EsiDetailsComponent', () => {
  let component: EsiDetailsComponent;
  let fixture: ComponentFixture<EsiDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsiDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
