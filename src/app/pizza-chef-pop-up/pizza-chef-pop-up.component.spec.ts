import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaChefPopUpComponent } from './pizza-chef-pop-up.component';

describe('PizzaChefPopUpComponent', () => {
  let component: PizzaChefPopUpComponent;
  let fixture: ComponentFixture<PizzaChefPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaChefPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaChefPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
