import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordInsertPageComponent } from './word-insert-page.component';

describe('WordInsertPageComponent', () => {
  let component: WordInsertPageComponent;
  let fixture: ComponentFixture<WordInsertPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordInsertPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordInsertPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
