import { TestBed } from '@angular/core/testing';
import { UserProfileService } from './user-profile.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

fdescribe('UserProfileService', () => {
  let userProfileService: UserProfileService;
  beforeEach(() => {TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [UserProfileService]
  });
  userProfileService = TestBed.get(UserProfileService);
  });


  fit('should be created', () => {
    const service: UserProfileService = TestBed.get(UserProfileService);
    expect(service).toBeTruthy();
  });

});
