# The Complete GitHub Actions & Workflows Guide

This project is part of **Section 5: Creating a CI/CD Workflow to Automate Testing and Deployment**

## **CREATE THE APP**

Uninstall any previously installed version of create-react-app

`npm uninstall -g create-react-app`

Create a boiler-plate react app

`npx create-react-app react-app --use-npm`

## **DEPLOY WITH SURGE**

[Surge](https://surge.sh/) is a utility for quickly deploying static applications.

1. First build the app

   `npm run build`

2. Run the surge command from your project's base directory

   `npx surge`

3. Select the build folder as the one to deploy
4. Paste the generated URL in a browser to view the hosted application running in a live surge server

**Retrieve the generated URL**

`npx surge list`

**Generate a token with Surge**

`npx surge token`

**Retrieve your surge user/email**

`npx surge whoami`

## **PRETTIER**

https://prettier.io/

### **INSTALL IN PROJECT DIRECTORY**

`npm install --save-dev --save-exact prettier`

### **GENERATE LINTING CONFIG FOR PRETTIER**

Use the prettier [playground](https://prettier.io/playground/) to generate and copy the config into a .prettierrc file

Create a .prettierignore file

### **VALIDATE STYLE**

`npx prettier --check "**/*.js"`

### **ENFORCE STYLE**

`npx prettier --write "**/*.js"`

## **Run Tests for continuous integration**

`CI=true npm run test -- --coverage`

<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## **Available Scripts**

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## **Learn More**

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

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
