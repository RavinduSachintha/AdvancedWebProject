import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchWordComponent } from './search-word.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('SearchWordComponent', () => {
  let component: SearchWordComponent;
  let fixture: ComponentFixture<SearchWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule],
      declarations: [ SearchWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the search-word Component', () => {
    expect(component).toBeTruthy();
  });
});
