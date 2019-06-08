export enum HttpEnum {
  USER_LOGIN = "http://localhost:3000/user/login",
  USER_REGISTER = "http://localhost:3000/user/register",
  USER_PROFILE = "http://localhost:3000/user/profile/",
  USER_EDIT_DETAILS = "http://localhost:3000/user/profile/editdetails/",
  USER_CHANGE_PASSWORD = "http://localhost:3000/user/profile/changepassword/",

  WORD_VIEW_ALL = "http://localhost:3000/word/retrieve/all" ,
  WORD_VIEW_BY_ID="http://localhost:3000/word/retrieve/",
  SUGGESTION_VIEW_ALL="http://localhost:3000/suggestion/retrieve/all",
  WORD_VIEW_BY_WORDPART="http://localhost:3000/word/retrieve/wordPart/",
  WORD_CREATE="http://localhost:3000/word/create",
  SUGGESTION_CREATE="http://localhost:3000/suggestion/create",
  COMMENTS_VIEW_ALL="http://localhost:3000/comment/retrieve/all",
  COMMENTS_CREATE="http://localhost:3000/comment/create",
  WORD_DELETE="http://localhost:3000/word/delete/",
  SUGGESTION_DELETE="http://localhost:3000/suggestion/delete/",
  COMMENT_DELETE="http://localhost:3000/comment/delete/",
  SUGGESTION_UPDATE="http://localhost:3000/suggestion/update/",

  SUGGESTION_VIEW_ALL_BY_USER_ID="http://localhost:3000/suggestion/retrieve/userid/",
  DEACTIVATE_USER_ACCOUNT="http://localhost:3000/user/profile/deactivate/"


}
