import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";

import { RankingCriteriaComponent } from "./ranking-criteria.component";
import { SideBarComponent } from "../../components/side-bar/side-bar.component";
import { BreadcrumbComponent } from "../../components/breadcrumb/breadcrumb.component";

fdescribe("RankingCriteriaComponent", () => {
  let component: RankingCriteriaComponent;
  let fixture: ComponentFixture<RankingCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [
        RankingCriteriaComponent,
        SideBarComponent,
        BreadcrumbComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
