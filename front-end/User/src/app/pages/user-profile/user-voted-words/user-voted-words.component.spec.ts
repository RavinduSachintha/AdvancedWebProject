import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVotedWordsComponent } from './user-voted-words.component';

describe('UserVotedWordsComponent', () => {
  let component: UserVotedWordsComponent;
  let fixture: ComponentFixture<UserVotedWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserVotedWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserVotedWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
