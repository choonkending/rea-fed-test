# Instructions
## Viewing the project locally
1. Run `npm install`
2. Run `npm start` to run server
3. Go to `http://localhost:3000` in your browser

## View on Heroku
Click [here](https://rea-fed-test.herokuapp.com/)

## Running tests
1. Run `npm test`


# Acceptance Criteria
### Hover over Results
* Given I have a property card in the Results column
* When I hover over the card
* Then I will see an 'Add Property' button

### Hover over Saved Property
* Given I have a property card in the Results column
* When I hover over the card
* Then I will see an 'Remove Property' button

### Add property
* Given I hover over a property card with ID 1 in the Results column
* And I see an 'Add property' button appear
* When I click on that button
* Then the property card with ID 1 will be added to the Saved Properties column

### Remove property
* Given I hover over a property card with ID 4 in the Saved Properties column
* And I see an 'Remove property' button appear
* When I click on that button
* Then the property card with ID 4 will be removed to the Saved Properties column

# Folder structure
- app/
  - actions/
  - components/
  - constants/
  - containers/
  - reducers/
  - scss/
  - store/
- data/
- test/

# Problems
1. When I `npm install` it sometimes stalls when installing node-sass.

Sometimes node-sass just hangs during npm installation. So `rm -rf node_modules` and try again.
If that does not work, `npm install node-sass` first, then run `npm install`. 

# Assumptions
1. You have node and npm in your environment.
  - For [testing purposes](https://github.com/tmpvar/jsdom) please use Node.js 4 or newer.
2. You are not adverse to css-modules. Otherwise, we can have a chat about BEM styling and css-modules. :)
3. For the purpose of this test, we run on IE10+ (because I opted to use flexbox)

# Potential improvements
1. Use [normalizr](https://github.com/gaearon/normalizr) to flatten JSON responses
2. Use [webpack with karma](https://github.com/webpack/karma-webpack) to run tests with mocha. Solves the relative path issue when testing, and also enables testing with different browsers easily.
3. Use [react-motion](https://github.com/chenglou/react-motion) to have better card transitions, i.e. nice sliding up to give context to the user that the card has been added.
