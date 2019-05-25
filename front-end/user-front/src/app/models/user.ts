import { EmailValidator } from '@angular/forms';

export interface User {
  _id?: String,
  email: String,
  username?: String,
  password: String,
  usertype?: String,
  userLevel?: String,
  votedWords?: Number,
  suggestedWords?: String,
  joinedDate?: String,
  birthday?: String
}
