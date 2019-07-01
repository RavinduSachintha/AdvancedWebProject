export interface Suggestion {
  data: string;
  wordId: string;
  userId: string;
  state?: string;
  votesCount?: number;
  createdDate?: string;
}
