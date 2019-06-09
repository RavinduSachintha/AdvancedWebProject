export interface Word {
  wordId?: string;
  data: string;
  bestSuggestion?: string;
  description?: string;
  state?: string;
  activeState: string;
  startDate?: string;
  endDate?: string;
  createdDate: string;
}
