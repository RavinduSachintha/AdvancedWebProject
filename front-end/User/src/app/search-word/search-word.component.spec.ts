import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWordComponent } from './search-word.component';

describe('SearchWordComponent', () => {
  let component: SearchWordComponent;
  let fixture: ComponentFixture<SearchWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
