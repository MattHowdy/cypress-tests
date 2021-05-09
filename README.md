## Testing with Cypress
This repo is made for testing the following application: https://form.jotform.com/210137027408345

# To run the tests enter one of the following commands:
- npx cypress run 
or 
- npm test


Bugreport may be found in the "BUGREPORT.md" file
Test execution result found in the "test-execution-result.png" file.

# Choosen solutions and further recommendations:
- Despite Cypress best practices micro functions ("getById", "getByClass".. etc) were created to extract the same logic and to have an easily understandable and reusable codebase.
- Despite the recommendations some tests may not be isolated, thus depending on the outcome of the previous test. This was made on purpose as following the cucumber and Gherkin language logic.
- Some solutions depend on CSS classes and HTML attributes, thus and more likely that the test cases break when the application code changes. The solution was chosen as no "data-cy" attributes were included in the application.