## Backend Functions

### User

- register

  - path: _localhost:3000/user/register_
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

  - path: _localhost:3000/user/login_
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
  - path: _localhost:3000/user/profile/username_
  - type: GET
  - headers: (Content-Type : application/x-www-form-urlencoded, x-access-token: **user token**)
  - request body:
  - response:
    - status - (success/unsucces)
    - data - (user data)
    - error - (default null)

### Word

- insert a word (English)

  - path: _localhost:3000/word/create_
  - type: POST
  - headers: (Content-Type : application/x-www-form-urlencoded, x-access-token: **user token**)
  - request body:
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

  - path: _localhost:3000/word/update_
  - type: PUT
  - headers: (Content-Type : application/x-www-form-urlencoded, x-access-token: **user token**)
  - request body:
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

  - path: _localhost:3000/word/delete/wordId_
  - type: DELETE
  - headers: (Content-Type : application/x-www-form-urlencoded, x-access-token: **user token**)
  - request body:
  - response:
    - status - (success/unsucces)
    - data - (deleted word data)
    - error - (default null)

- get a word by ID (English)

  - path: _localhost:3000/word/retrieve/wordId_
  - type: GET
  - headers: (Content-Type : application/x-www-form-urlencoded)
  - request body:
  - response:
    - status - (success/unsucces)
    - data - ( word data)
    - error - (default null)

- get all words (English)
  - path: _localhost:3000/word/retrieve/all_
  - type: GET
  - headers: (Content-Type : application/x-www-form-urlencoded)
  - request body:
  - response:
    - status - (success/unsucces)
    - data - ( words data)
    - error - (default null)

### Suggestion

- insert a suggestion (Sinhala)

  - path: _localhost:3000/suggestion/create_
  - type: POST
  - headers: (Content-Type : application/x-www-form-urlencoded, x-access-token: **user token**)
  - request body:
    - wordId - required
    - data - required (word in Sinhala)
    - state
    - votesCount
    - createdDate
  - response:
    - status - (success/unsucces)
    - data - (suggestion data)
    - error - (default null)

- update a suggestion (Sinhala)

  - path: _localhost:3000/suggestion/update_
  - type: PUT
  - headers: (Content-Type : application/x-www-form-urlencoded, x-access-token: **user token**)
  - request body:
    - wordId - required
    - suggestionId - required (current suggestion id)
    - data - required (word in English)
    - state
    - votesCount
    - createdDate
  - response:
    - status - (success/unsucces)
    - data - (old suggestion data)
    - error - (default null)

- delete a suggestion (Sinhala)

  - path: _localhost:3000/suggestion/delete/suggestionId_
  - type: DELETE
  - headers: (Content-Type : application/x-www-form-urlencoded, x-access-token: **user token**)
  - request body:
  - response:
    - status - (success/unsucces)
    - data - (deleted suggestion data)
    - error - (default null)

- get a suggestion by ID (Sinhala)

  - path: _localhost:3000/suggestion/retrieve/suggestionId_
  - type: GET
  - headers: (Content-Type : application/x-www-form-urlencoded)
  - request body:
  - response:
    - status - (success/unsucces)
    - data - ( suggestion data)
    - error - (default null)

- get all suggestions (Sinhala)
  - path: _localhost:3000/suggestion/retrieve/all_
  - type: GET
  - headers: (Content-Type : application/x-www-form-urlencoded)
  - request body:
  - response:
    - status - (success/unsucces)
    - data - ( suggestions data)
    - error - (default null)
