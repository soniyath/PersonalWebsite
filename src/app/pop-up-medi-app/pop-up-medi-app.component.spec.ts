import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpMediAppComponent } from './pop-up-medi-app.component';

describe('PopUpMediAppComponent', () => {
  let component: PopUpMediAppComponent;
  let fixture: ComponentFixture<PopUpMediAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpMediAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpMediAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
