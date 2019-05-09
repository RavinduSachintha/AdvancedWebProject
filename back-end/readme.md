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