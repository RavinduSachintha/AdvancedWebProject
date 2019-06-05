import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthenticationService } from './authentication.service';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('AuthenticationService', () => {
  let authenticationService: AuthenticationService;
  beforeEach(() => {TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule],
    providers: [AuthenticationService]
  });
  authenticationService = TestBed.get(AuthenticationService);
  });


  fit('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });

});
