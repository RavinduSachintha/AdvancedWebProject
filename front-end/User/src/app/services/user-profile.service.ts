import { Injectable } from '@angular/core';
import { HttpBackendRequestService } from './http-backend-request.service';
import { HttpEnum } from '../utils/http-enum.enum';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private httpBackendRequestService: HttpBackendRequestService) { }

  editUserProfileDetails(id, name, username, birthday, profession) {
    const editedDetails = {
      name : name,
      username : username,
      birthday : birthday,
      profession : profession
    }
    return this.httpBackendRequestService.realizarHttpPostWithToken(HttpEnum.USER_EDIT_DETAILS+id, editedDetails);
  }

  changeUserPassword(id, currentpwd, newpwd) {
    const newpwdDetais = {
      currentpwd: currentpwd,
      newpwd: newpwd
    }
    return this.httpBackendRequestService.realizarHttpPostWithToken(HttpEnum.USER_CHANGE_PASSWORD+id, newpwdDetais);
  }

}
