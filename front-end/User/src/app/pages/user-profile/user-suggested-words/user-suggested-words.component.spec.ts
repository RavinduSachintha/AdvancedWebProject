import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSuggestedWordsComponent } from './user-suggested-words.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

fdescribe('UserSuggestedWordsComponent', () => {
  let component: UserSuggestedWordsComponent;
  let fixture: ComponentFixture<UserSuggestedWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule],
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
