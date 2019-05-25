import { User } from './user';

fdescribe('User', () => {
  fit('should create an instance of User Model', () => {
    expect(new User()).toBeTruthy();
  });
});
