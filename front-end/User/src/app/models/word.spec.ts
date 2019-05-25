import { Word } from './word';

fdescribe('Word', () => {
  fit('should create an instance of Words Model', () => {
    expect(new Word()).toBeTruthy();
  });
});
