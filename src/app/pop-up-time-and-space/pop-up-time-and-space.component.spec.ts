import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpTimeAndSpaceComponent } from './pop-up-time-and-space.component';

describe('PopUpTimeAndSpaceComponent', () => {
  let component: PopUpTimeAndSpaceComponent;
  let fixture: ComponentFixture<PopUpTimeAndSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpTimeAndSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpTimeAndSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
