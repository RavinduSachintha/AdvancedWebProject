import { TestBed } from "@angular/core/testing";
import { HttpBackendRequestService } from "./http-backend-request.service";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

fdescribe("HttpBackendRequestService", () => {
  // declare the variables which use for testing
  let httpTestingController: HttpTestingController;
  let service: HttpBackendRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpBackendRequestService],
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(HttpBackendRequestService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  fit("should be created", () => {
    expect(service).toBeTruthy();
  });

  fdescribe("#realizarHttpPost", () => {
    fit("returned respond should match the right data", () => {
      const mockUsers = [
        {
          username: "abc",
          email: "abc@gmail.com"
        }
      ];

      service.realizarHttpPost('http://localhost:3000/login', {email: 'abc@gmail.com', password: 'abc@123'}).subscribe(userData => {
        expect(userData[0].username).toEqual("abc");
        expect(userData[0].email).toEqual("abc@gmail.com");
      })

      const req = httpTestingController.expectOne(
        "http://localhost:3000/login"
      );

      req.flush(mockUsers);
    });
  });
});
