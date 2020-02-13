import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediAppWorkComponent } from './medi-app-work.component';

describe('MediAppWorkComponent', () => {
  let component: MediAppWorkComponent;
  let fixture: ComponentFixture<MediAppWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediAppWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediAppWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
