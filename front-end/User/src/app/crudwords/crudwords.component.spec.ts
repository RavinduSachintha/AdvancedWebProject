import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CRUDwordsComponent } from './crudwords.component';

describe('CRUDwordsComponent', () => {
  let component: CRUDwordsComponent;
  let fixture: ComponentFixture<CRUDwordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule],
      declarations: [ CRUDwordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRUDwordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CRUD WORD Component', () => {
    expect(component).toBeTruthy();
  });
});
