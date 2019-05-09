## Backend Functions
### User

- register
  - path: *localhost:3000/user/register*
  - type: POST
  - headers: (Content-Type : application/x-www-form-urlencoded)
  - request body:
    - email - required
    - username - required
    - password - required
    - usertype - required
    - userLevel
    - votedWordCount
    - suggestedWordCount
    - joinedDate
  - response:
      - status - (success/unsucces)
      - data - (user id)
      - error - (default null)

- login
  - path: *localhost:3000/user/login*
  - type: POST
  - headers: (Content-Type : application/x-www-form-urlencoded)
  - request body:
    - email - required
    - password - required
  - response:
      - status - (success/unsucces)
      - data - (user data & token)
      - error - (default null)

- get profile data
  - path: *localhost:3000/user/profile/username*
  - type: GET
  - headers: (Content-Type : application/x-www-form-urlencoded, x-access-token: **user token**)
  - request body:
  - response:
      - status - (success/unsucces)
      - data - (user data)
      - error - (default null)

### Word

- insert a word (English)
  - path: *localhost:3000/word/create*
  - type: POST
  - headers: (Content-Type : application/x-www-form-urlencoded, x-access-token: **user token**)
  - request body:
    - userId - required
    - data - required (word in English)
    - state
    - bestSuggestion
    - startDate
    - endDate
    - activeState
    - createdDate
  - response:
      - status - (success/unsucces)
      - data - (word data)
      - error - (default null)

- update a word (English)
  - path: *localhost:3000/word/update*
  - type: PUT
  - headers: (Content-Type : application/x-www-form-urlencoded, x-access-token: **user token**)
  - request body:
    - userId - required
    - wordId - required (current word id)
    - data - required (word in English)
    - state
    - bestSuggestion
    - startDate
    - endDate
    - activeState
    - createdDate
  - response:
      - status - (success/unsucces)
      - data - (old word data)
      - error - (default null)

- delete a word (English)
  - path: *localhost:3000/word/delete/wordId*
  - type: DELETE
  - headers: (Content-Type : application/x-www-form-urlencoded, x-access-token: **user token**)
  - request body:
  - response:
      - status - (success/unsucces)
      - data - (deleted word data)
      - error - (default null)

- get a word by ID (English)
  - path: *localhost:3000/word/retrieve/wordId*
  - type: GET
  - headers: (Content-Type : application/x-www-form-urlencoded)
  - request body:
  - response:
      - status - (success/unsucces)
      - data - ( word data)
      - error - (default null)

- get all words (English)
  - path: *localhost:3000/word/retrieve/all*
  - type: GET
  - headers: (Content-Type : application/x-www-form-urlencoded)
  - request body:
  - response:
      - status - (success/unsucces)
      - data - ( words data)
      - error - (default null)