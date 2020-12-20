import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Home from "./pages/Home";

export default function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/">
              <Home />
              <Redirect to="/" />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
