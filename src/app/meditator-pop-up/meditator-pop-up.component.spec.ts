import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditatorPopUpComponent } from './meditator-pop-up.component';

describe('MeditatorPopUpComponent', () => {
  let component: MeditatorPopUpComponent;
  let fixture: ComponentFixture<MeditatorPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeditatorPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeditatorPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
