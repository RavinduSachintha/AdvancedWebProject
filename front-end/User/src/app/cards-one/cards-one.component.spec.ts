import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CardsOneComponent } from './cards-one.component';

describe('CardsOneComponent', () => {
  let component: CardsOneComponent;
  let fixture: ComponentFixture<CardsOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule],
      declarations: [ CardsOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CardsOne Component', () => {
    expect(component).toBeTruthy();
  });
});
