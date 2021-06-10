import "babel-polyfill";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import AppRouter from "./views/Router";
import Root from "./Root";
import { Switch, Router } from "react-router-dom";
import ProtectedRoute from "./views/ProtectedRoute";
import http from "./helpers/http";

// Import css file
import "./index.scss";

const history = createBrowserHistory();
http.setupInterceptors(history);

ReactDOM.render(
  <Router history={history} basename="/">
    <Root>
      <Fragment>
        <Switch>
          <ProtectedRoute path="/" component={AppRouter} />
        </Switch>
      </Fragment>
    </Root>
  </Router>,
  document.getElementById("root")
);
