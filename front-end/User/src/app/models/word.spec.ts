import { Word } from './word';

describe('Word', () => {
  fit('should create an instance of Words Model', () => {
    expect(new Word()).toBeTruthy();
  });
});
