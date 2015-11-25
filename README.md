# Instructions
1. Run `npm install`

# Acceptance Criteria
## Add property
* Given I hover over a property card with ID 1 in the Results column
* And I see an 'Add property' button appear
* When I click on that button
* Then the property card with ID 1 will be added to the Saved Properties column

## Remove property
* Given I hover over a property card with ID 4 in the Saved Properties column
* And I see an 'Remove property' button appear
* When I click on that button
* Then the property card with ID 4 will be removed to the Saved Properties column


# Assumptions
1. You have node and npm in your environment.
2. You are not adverse to css-modules. Otherwise, we can have a chat about BEM styling and css-modules. :)
3. For the purpose of this test, we run on IE10+ (because I opted to use flexbox)