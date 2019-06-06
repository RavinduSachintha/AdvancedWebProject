import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordRoundsComponent } from './word-rounds.component';

describe('WordRoundsComponent', () => {
  let component: WordRoundsComponent;
  let fixture: ComponentFixture<WordRoundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordRoundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordRoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
