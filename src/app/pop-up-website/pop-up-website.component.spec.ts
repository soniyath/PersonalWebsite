import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpWebsiteComponent } from './pop-up-website.component';

describe('PopUpWebsiteComponent', () => {
  let component: PopUpWebsiteComponent;
  let fixture: ComponentFixture<PopUpWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
