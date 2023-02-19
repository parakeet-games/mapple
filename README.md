# MAPPLE

MAPPLE is a **geography guessing game** created by WriterArtistCoder for LeagueXP! Countries are sampled from the 195 UN-recognized countries, consisting of all UN members, Vatican City, and Palestine.

Dates are written in the YYYYMMDD or MM/DD format.

Each day should ideally be randomly chosen, and repetition should be avoided for the first 195 challenges (note that some days have no challenges). From then on, repeating challenges from the last 30 should be avoided.

On days when no challenge has been prepared, MAPPLE currently falls back to a single default challenge. In the future, MAPPLE will fall back to a random previous challenge.

## npm run addc
Use `npm run addc` to quickly append new countries to `challenges.json`.

## Glossary
- Daily **challenges** appear on the site.
- They each consist of one **country** and usually 5-7 **hints** (or **clues**).
- The **player** (or **user**) takes an unlimited number of **guesses**, getting a hint with each guess until they run out.

## Writing hints
- Hints should avoid naming things specific to the country.
- Hints should avoid painting the country in a negative light.

## Notes
- The 2/18 (Chad) - 2/24 (Paraguay) challenges were originally supposed to be for 2/12 - 2/18. But MAPPLE was having issues and falling back on the default challenge instead during that period and possibly before. So on 2022-02-18, those challenges were moved six days forward to 2/18 - 2/24, and an eighth challenge was added for 2/25 (Trinidad and Tobago).
  - As of 2022-02-18, MAPPLE continues to have those issues, so the 2/18 (Chad) - 2/25 (Trinidad and Tobago) challenges will be postponed indefinitely and reused at a later date.

## Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To run, type `yarn`

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
