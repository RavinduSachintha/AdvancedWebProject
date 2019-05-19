import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDwordsComponent } from './crudwords.component';

describe('CRUDwordsComponent', () => {
  let component: CRUDwordsComponent;
  let fixture: ComponentFixture<CRUDwordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRUDwordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRUDwordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
