import { EmailValidator } from '@angular/forms';

export interface User {
  _id?: string,
  email: string,
  username?: string,
  password: string,
  usertype?: string,
  userLevel?: number,
  votedWords?: number,
  suggestedWords?: string,
  joinedDate?: string,
  birthday?: string,
  profession?: string,
  name?: string
}
