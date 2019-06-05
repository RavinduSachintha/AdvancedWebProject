import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddedWordsComponent } from './user-added-words.component';

describe('UserVotedWordsComponent', () => {
  let component: UserAddedWordsComponent;
  let fixture: ComponentFixture<UserAddedWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddedWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddedWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
