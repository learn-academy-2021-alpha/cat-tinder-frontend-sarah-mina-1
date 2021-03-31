# Cat Tinder Frontend

### Create App Card
- $ yarn create react-app cat-tinder-frontend
- accepted the repo from GitHub classroom
- copied the first line from the "add existing code section"
- $ git remote add origin https://github.com/learn-academy-2021-alpha/cat-tinder-frontend-sarah-mina-1.git
- $ git checkout -b main
- $ git add .
- $ git commit -m 'initial commit'
- $ git push origin main

### Frontend Setup Card
- added assets, pages, components folder
- added files for every pages
- add bootstrap
- add react-router
- added mock cats

### Testing with Jest and Enzyme

To run tests in a React app:
`$ yarn test`

Enzyme - testing library; allows shallow rendering: only renders first layer of a component

To add Enzyme to your React App:
`$ yarn add -D enzyme react-test-renderer enzyme-adapter-react-16`

Syntax for assertion
`expect(<actualQueried>).<matcher>(<expectedValue>)`


Three A's:

// arrange - set up for the situation, rendering the tested component

// act - user interaction

// assert - expectation of component behavior


### Read Functionality 
Read functionality is concerned with just displaying information: CatIndex, CatShow

To use dynamic rendering on routes: use attribute `render` instead of `component`.
`render` takes a function that should return a component

In order to access URL params, use React-Route `match` object on `props`
e.g. `props.match.params.<:url_param>`
Documentation: [https://reactrouter.com/web/api/match](https://reactrouter.com/web/api/match
)

React's "key" prop warning: use a unique identifier to help React determine which items need to be rerendered

