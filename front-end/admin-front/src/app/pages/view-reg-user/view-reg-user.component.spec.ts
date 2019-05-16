import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRegUserComponent } from './view-reg-user.component';

describe('ViewRegUserComponent', () => {
  let component: ViewRegUserComponent;
  let fixture: ComponentFixture<ViewRegUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRegUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRegUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
