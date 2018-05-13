import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import * as Pages from "./pages";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Pages.Onboarding} />
          <Route exact path="/home" component={Pages.Home} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
