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
    - state - required
    - bestSuggestion - required
    - startDate
    - endDate
    - activeState
    - createdDate
  - response:
      - status - (success/unsucces)
      - data - (word data)
      - error - (default null)