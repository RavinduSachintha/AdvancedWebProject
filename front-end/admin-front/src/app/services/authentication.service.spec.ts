import { TestBed } from "@angular/core/testing";

import { AuthenticationService } from "./authentication.service";
import { AdminUser } from "../models/admin-user";
import { AddAdminComponent } from "../pages/add-admin/add-admin.component";

describe("AuthenticationService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });
});
