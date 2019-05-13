import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSuggestedWordsComponent } from './user-suggested-words.component';

describe('UserSuggestedWordsComponent', () => {
  let component: UserSuggestedWordsComponent;
  let fixture: ComponentFixture<UserSuggestedWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSuggestedWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSuggestedWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
