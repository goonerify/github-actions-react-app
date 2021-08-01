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

   _NOTE: Sometimes the surge command might error out with error message:<br/>
   "Aborted - you do not have permission to publish to `<some surge domain>`"<br/>
   In this case, it seems the created domain is actually taken and you might
   need to run the surge command again until you come across one that is available_

3. Select the build folder as the one to "project" by appending it to the displayed path
4. Accept the generated domain
5. Paste the generated URL in a browser to view the hosted application running in a live surge server

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

`npm run format:check`

### **ENFORCE STYLE**

`npm run format`

\_NOTE: Husky has been configured with a pre-commit hook to run linters on staged files using [lint-staged](https://github.com/okonet/lint-staged). More info in the [prettier precommit notes](https://prettier.io/docs/en/precommit.html)

## **Run Tests for continuous integration**

`CI=true npm run test -- --coverage`

## **Encrypting & Decrypting Files**

Install the command line utility [GnuPG](https://www.gnupg.org/) in order to encrypt secret files

1. Create a GITHUB secret with a secure passphrase
2. Encrypt the file using the secure passphrase
   `gpg --symmetric --cipher-algo AES256 <file to encrypt>`
3. Use the passphrase to decrypt the secret file after checking it out in a github actions job

## **Conventional Commits**

### **[Commitlint](https://github.com/conventional-changelog/commitlint)**

Checks if your commit messages meet the [conventional commit format](https://conventionalcommits.org/)

#### Install

`npm install --save-dev @commitlint/config-conventional @commitlint/cli`

#### Configure commitlint to use conventional config

`echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js`

#### Lint commits before they are created using [Husky](https://github.com/typicode/husky)'s commit-msg hook

##### Install Husky

`npm install husky --save-dev`

##### Activate hooks

`npx husky install`

##### Add hook

`npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'`

In versions of husky < 7, you would instead add the hook:

```
"husky": {
   "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
   }
}
```

### **[Commitizen](https://github.com/commitizen/cz-cli)**

When you commit with Commitizen, you'll be prompted to fill out any required commit fields at commit time

#### Install

Commitizen can be installed locally or globally.

##### Local Installation

1. Install locally to use an npm script for commits

`npm install --save-dev commitizen`

2. Add npm commit script
   Add the following script to package.json to use the `npm run` command for commits.

_NOTE: It seems the `npm run` script has a nicer, user friendly UI on windows_

```
  "scripts": {
    "commit": "cz"
  }
```

_NOTE: if you are using precommit hooks thanks to something like husky, you will need to name your script some thing other than "commit" (e.g. "cm": "cz"). The reason is because npm-scripts has a "feature" where it automatically runs scripts with the name prexxx where xxx is the name of another script. In essence, npm and husky will run "precommit" scripts twice if you name the script "commit", and the work around is to prevent the npm-triggered precommit script._

##### Global Installation

1. Install globally to use `git commit` command for commits

`npm install commitizen -g`

2. Add hook
   _NOTE: To derive this hook, I simply replaced the name of the file to create and the command to create it in the `npx husky add` command for husky version 7.x_

`npx husky add .husky/prepare-commit-msg 'exec < /dev/tty && git cz --hook || true'`

In versions of husky < 7, you would instead add the hook:

```
"husky": {
   "hooks": {
      "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true"
   }
}
```

Finally, initialize your project to use the cz-conventional-changelog adapter

`npx commitizen init cz-conventional-changelog --save-dev --save-exact`

_NOTE: This adds a commitizen config to package.json_

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
