/* global document */
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./utils/Store";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import App from './App';

render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("content")
);
