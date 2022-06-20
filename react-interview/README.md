# React Interview
I wrote up this sample React interview on a weekend (open to suggestions)

## Problems
- list of users
  - speech - could you create a child component to display a list of users with their names?
  - answer - add UserList.jsx child component to display in App.js
- update on page load
  - speech - could you update the user list on page load using this API endpoint that I've just sent you?
    - [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
  - answer - add useEffect with no args for componentDidMount that fetches API endpoint
- loading component
  - speech - could you add a loading component that displays while waiting for the fetch?
  - answer - add useState and setLoading in componentDidMount inside async setUser function
- search input
  - speech - could you add a component to search the list of users
  - answer - searchbar with filter function and input element
- use custom onHover hook
  - speech - given this custom hook that tells you if an element is being hovered on, could you bold the text when it is hovered?
  - answer - add conditional render to bold on UserItem and `ref={hoverRef}` to tell hook which element
- OPTIONAL - reponsive display custom hook
  - speech - could you write a custom hook to display the current screen type? Basically I want you to implement a hook so I can use the following driver code.
    - `const isMobile = useMediaQuery(768); const isTablet = useMediaQuery(1024);`
    - `<h1>{isMobile ? "Mobile" : isTablet ? "Tablet" : "Desktop"}</h1>`
  - answer - store current width and add listener for resizeHandler
- OPTIONAL - ErrorBoundary catch errors
  - speech - could you catch errors and display an error component as a fallback?
  - answer - add useState and ErrorBoundary
- OPTIONAL - getStaticProps build time
  - speech - could you change this to get the user list at build time instead of runtime?
  - answer - getStaticProps with Next.js


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
