import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWordComponent } from './view-word.component';

describe('ViewWordComponent', () => {
  let component: ViewWordComponent;
  let fixture: ComponentFixture<ViewWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
