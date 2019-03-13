import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsiRootComponent } from './esi-root.component';

describe('EsiRootComponent', () => {
  let component: EsiRootComponent;
  let fixture: ComponentFixture<EsiRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsiRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsiRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
