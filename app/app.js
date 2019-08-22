// Needed for redux-saga es6 generator support
import "@babel/polyfill";

// Import all the third party stuff
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router/immutable";
import FontFaceObserver from "fontfaceobserver";
import createHistory from "history/createBrowserHistory";
import "sanitize.css/sanitize.css";

// Import root app
import App from "containers/App";
import config from "../config/config";
import Immutable from "immutable";

/* eslint-enable import/no-webpack-loader-syntax */

// Import CSS reset and Global Styles
import "styles/theme.scss";

import configureStore from "./configureStore";

import "./i18n/i18n";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import * as ReactGA from "react-ga";

// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver("Open Sans", {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(
  () => {
    document.body.classList.add("fontLoaded");
  },
  () => {
    document.body.classList.remove("fontLoaded");
  }
);

// Init GoogleAnalitycs
const { gaId } = config;
if (gaId) {
  ReactGA.initialize(gaId);
}

// Create redux store with history
const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById("app");
const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: config.brand.colors.primary
    },
    secondary: {
      main: config.brand.colors.secondary
    }
  },
  typography: {
    useNextVariants: true
  }
});

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider theme={customTheme}>
          <App />
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(["containers/App"], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();
