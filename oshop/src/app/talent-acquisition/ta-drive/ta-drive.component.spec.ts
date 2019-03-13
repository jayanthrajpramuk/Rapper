import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaDriveComponent } from './ta-drive.component';

describe('TaDriveComponent', () => {
  let component: TaDriveComponent;
  let fixture: ComponentFixture<TaDriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaDriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
