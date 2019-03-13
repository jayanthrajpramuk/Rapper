import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsiHomeComponent } from './esi-home.component';

describe('EsiHomeComponent', () => {
  let component: EsiHomeComponent;
  let fixture: ComponentFixture<EsiHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsiHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
