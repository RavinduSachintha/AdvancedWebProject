import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWordSuggestionComponent } from './view-word-suggestion.component';

describe('ViewWordSuggestionComponent', () => {
  let component: ViewWordSuggestionComponent;
  let fixture: ComponentFixture<ViewWordSuggestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWordSuggestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWordSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
