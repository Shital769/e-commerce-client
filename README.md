# CMS Frontend

## Work Flow

### Reset Password

When an admin user forgets theri password, they should be abke to reset password from the system

So,follow the steps to build a password reset system:

1. FE: Show the email input form and let user submit that to api.
2. BE: Get the data in the api and check if user exist in our db associated with that email.
3. BE: If wer have no user found, send error message saying that user not found, that completes transaction.
4. BE: If user found, generate a random 6 digits number and store in a session table.
5. BE: Send that randomly generated 6 digit number to the user email address.
6. BE: At the same time send response to frontend saying OTP has been sent to their email.
7. FE: If we receive success message from the bacjend, then show anotehr form thta requires you to enter the OTP that was sent toyour email and 2 more input fields for the new password and confirm password. Let user submit the form to another api.
8. BE: Once user submits the form, in the API, grab that OTP and password and email.
9. BE: Check if combination of email and OTP exists in hte sessios tabke, if it doesn't exist then remove the data from session table and continue to step 10.
10. BE: Encrypt the incoming plain password, user table with that new encrypted password based on user email.
11. Once password upate succesful, then send user an email notification saying Password has been changed. And also response passowrd update success message to the frontend.

# Session Model:

status: string
token: string,
asscociation: string (insert email)
ct
ut
