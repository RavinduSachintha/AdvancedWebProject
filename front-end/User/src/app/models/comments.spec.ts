import { Comments } from './comments';

fdescribe('Comments', () => {
  fit('should create an instance of Comments Model', () => {
    expect(new Comments()).toBeTruthy();
  });
});
