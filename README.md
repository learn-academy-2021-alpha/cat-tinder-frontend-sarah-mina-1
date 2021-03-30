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