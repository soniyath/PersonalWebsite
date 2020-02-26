import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneThingPopUpComponent } from './one-thing-pop-up.component';

describe('OneThingPopUpComponent', () => {
  let component: OneThingPopUpComponent;
  let fixture: ComponentFixture<OneThingPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneThingPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneThingPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
