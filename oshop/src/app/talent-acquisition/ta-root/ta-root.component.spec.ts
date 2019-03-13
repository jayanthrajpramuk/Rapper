import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaRootComponent } from './ta-root.component';

describe('TaRootComponent', () => {
  let component: TaRootComponent;
  let fixture: ComponentFixture<TaRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
