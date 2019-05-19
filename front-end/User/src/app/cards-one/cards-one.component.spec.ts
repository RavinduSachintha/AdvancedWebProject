import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsOneComponent } from './cards-one.component';

describe('CardsOneComponent', () => {
  let component: CardsOneComponent;
  let fixture: ComponentFixture<CardsOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
