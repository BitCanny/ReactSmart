# React Native And Web

A way to share application logic between a React Web app and a React Native app,
while keeping the individual component rendering unique to each platform.

## The app

A simple app with a login page, where user can authenticate and login.

## Technologies Used

  - [React](https://facebook.github.io/react/)
  - [React Native](https://facebook.github.io/react-native/)
  - [Redux](http://redux.js.org/)
  - [Webpack](https://webpack.github.io/)
  - [Babel](https://babeljs.io/)

## Choosing one tool over other
  - Choosing `gulp` over `grunt`

        Grunt is based on configuring separate independent tasks, each task
        opens/handles/closes file. Gulp requires less amount of code and is based
        on Node streams, which allows it to build pipe chains (w/o reopening the
        same file) and makes it faster.

  - Choosing `superagent` over `axios`

        Axios is promise based and Superagent is not. They are both asynchronous but
        since axios waits to resolve the response it gets it appears "slower" than
        superagent.

## Directory Structure

`android` houses the Android project files, `ios` houses the iOS project files,
and `web` houses the `webpack` configs and `index.html` (it is also the
destination of our minified bundle).

The `app` itself is primarily based on [React/Webpack/Redux Boilerplate][bp],
for more info on that head over there. The only key difference can be found in
`app/native`, and `app/web`. What's going on here is both the native app and
web app are sharing their core application logic, while keeping the individual
rendering separate.

The reasoning for this is twofold - for one, React Native/React wasn't designed
to be a "write once, run everywhere" framework. Facebook constantly calls it a
"learn once, write everywhere" framework - the idea being that you tailor your
implementation to the platform you're writing for. The second is that React
Native and React are ultimately... different and the code wouldn't be reusable
without some crazy aliases.

## Entry Points

The entry point for the iOS app is `index.ios.js`, for android is
`index.android.js`, and for the web app is `app/web/index.js`.

## Configured Scripts

### Running in dev/production

There are 8 defined scripts in [package.json][pg]:

  1. `start`
  1. `ios-bundle`
  1. `ios-dev-bundle`
  1. `android-bundle`
  1. `android-dev-bundle`
  1. `web-bundle`
  1. `web-dev`

### start

`start` is used when running/bundling the native application. When you open
either the xcode project or the android studio project and hit "run", it
kicks off a node server via the `start` command. Every time you make a
JavaScript change, instead of needing to rebuild and recompile your application,
you simply refresh the app and the changes are magically there. As this is not
a React Native guide I will not be going into more detail than that - further
information can be found on Facebook's [React Native Getting Started][gs] guide.

### bundling

For `ios-bundle`, `ios-dev-bundle`, `android-bundle`, and `android-dev-bundle`,
the script builds the JavaScript bundle (either minified or not-minified
depending on the presence of `dev` or not), and places it where the
corresponding project expects it to be for running locally on your device.
Again, you can find more info on running on your device on Facebook's
[React Native Getting Started][gs].

### web

`web-dev` kicks off a webpack server on port 3001, it utilizes hot reloading
with some redux-time-machine-magic to have a crazy awesome dev experience where
you can rewind and revert actions in your application.

`web-bundle` creates a minified JavaScript bundle (that also houses the minified
css) and places it next to the `index.html` in `web/public` that you can serve
with any static file server.

### clear-cache

Whenever you change something but the app is not working as intended, it might
be a cache issue.

Just run `npm run clear-cache`!

## Further Configuration

Webpack sets the `PLATFORM_ENV` environment variable to be `web`. You can use
this check to conditionally load different files depending on if you're building
your native or web app. For example - you can abstract out the difference
between local storage mechanisms.

[gs]: https://facebook.github.io/react-native/docs/getting-started.html
[bp]: https://github.com/kauffecup/react-redux-webpack-boilerplate