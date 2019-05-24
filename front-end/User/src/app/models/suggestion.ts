export class Suggestion {
    id?: string;
    data: string;
    wordId?:string;
    state?:string;
    votesCount?:number;
    upVotedList?:Array<string>;
    downVotedList?:Array<string>;
    userId?:string;
    createdDate?:Date;

   
}
