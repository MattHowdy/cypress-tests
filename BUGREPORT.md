In this document, the possible bugs were collected that were found in the test application. 
Some of the found bugs may not be real bugs but included as possible improvements.


## NAME PAGE
On the page where the names are filled the following bugs were noticed:
# A1. Easy forward 
    - The first name and the last name may be skipped, it is recommended to set these fields as required ones.
# A2. Too long and too short inputs
    - It is recommended to validate the max and min length of the entered values.
# A3. Type of input
    - It is recommended to set the type of the input to text avoiding an invalid formatted name input.
 
## UPLOAD FILE PAGE
# B1. Easy forward
    - It is possible to forward in the progress without uploading any kind of file. It is recommended to prompt the user to upload a file.
# B2. Missing file purpose
    - Missing the declaration of what sort of file the user should upload.
# B3. Too loose validation
    - The uploading file type should be restricted too as the current validation seems to be too loose.
# B4. Validation popup
    - In the case of uploading an invalid type of file, the validation pop-up does not raise the attention enough. Plus, it sticks on the page, and does not disappear when clicking outside of it, or going back to the previous page.


## SIGNATURE PAGE
# C1. Easy forward
    - It is possible to forward in the progress without signing the canvas. It is recommended to prompt the user to sign the canvas.

## DATE PAGE

# D1. Easy forward 
    - It is possible to forward in the progress without including a date. It is recommended to prompt the user to enter a date.
# D2 Missing date purpose
    - It is not clear what sort of date should the user include. So defining the desired input is necessary. It may be a birthdate, a registration date .. etc
# D3. Possible to include impossible future dates
# D4. Possible to include very past dates. 
    - Recommended to validate the date according to the desired input.


## SECURITY QUESTION PAGE
# E1. Missing placeholder
# E2. Missing required answer
    - It is possible to forward in the progress without including an answer. It is recommended to prompt the user to enter an answer.


## NAVIGATION BAR 
On the button of the page, there is a timeline with bullet points each of them navigates to a screen.
# N1. It is possible to navigate to screens that have not been visited yet, which may result in skipped screens.  


## FURTHER RECOMMENDATIONS
- If the application is designed to be a registration flow, then a terms and condition page is necessary to include, as well as validating against bots by including ReCaptcha. 
