import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathTutorPopUpComponent } from './math-tutor-pop-up.component';

describe('MathTutorPopUpComponent', () => {
  let component: MathTutorPopUpComponent;
  let fixture: ComponentFixture<MathTutorPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathTutorPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathTutorPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
