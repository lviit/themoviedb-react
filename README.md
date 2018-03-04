# themoviedb-react

React with The Movie Database API. Not endorsed or certified by TMDb.

[![Build Status](https://travis-ci.org/lviit/themoviedb-react.svg?branch=master)](https://travis-ci.org/lviit/themoviedb-react)

## getting started
install packages:
```
npm install
```
Create the settings file and add your api key (You can request an API key by logging in to your account on TMDb and clicking the "API" link in the left hand side bar of your account page):
```
cp src/js/services/Settings.default.js src/js/services/Settings.js
```

Use webpack-dev-server for local development:
```
webpack-dev-server
```
build the app:
```
webpack
```

TMdb api documentation can be found at: https://developers.themoviedb.org/3/getting-started
