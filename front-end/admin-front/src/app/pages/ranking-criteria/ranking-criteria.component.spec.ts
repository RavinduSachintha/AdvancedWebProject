import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingCriteriaComponent } from './ranking-criteria.component';

describe('RankingCriteriaComponent', () => {
  let component: RankingCriteriaComponent;
  let fixture: ComponentFixture<RankingCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
