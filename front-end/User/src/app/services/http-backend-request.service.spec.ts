import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpBackendRequestService } from './http-backend-request.service';

fdescribe('HttpBackendRequestService', () => {
  let httpBackendRequestService: HttpBackendRequestService;
  beforeEach(() => {TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [HttpBackendRequestService]
  });
  httpBackendRequestService = TestBed.get(HttpBackendRequestService);
  });


  fit('should be created', () => {
    const service: HttpBackendRequestService = TestBed.get(HttpBackendRequestService);
    expect(service).toBeTruthy();
  });

});
