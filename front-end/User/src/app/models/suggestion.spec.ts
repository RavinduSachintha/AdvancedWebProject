import { Suggestion } from './suggestion';

fdescribe('Suggestion', () => {
  fit('should create an instance of Suggestions Model', () => {
    expect(new Suggestion()).toBeTruthy();
  });
});
