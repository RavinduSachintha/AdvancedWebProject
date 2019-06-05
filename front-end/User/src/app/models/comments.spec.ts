import { Comments } from './comments';

describe('Comments', () => {
  fit('should create an instance of Comments Model', () => {
    expect(new Comments()).toBeTruthy();
  });
});
