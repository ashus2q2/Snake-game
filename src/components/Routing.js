import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
import Game from "./game/Game";
import Home from "./Home";

const Routing = () => {
  return (
    <>
      <Router basename="/">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/game" component={Game}/>
        </Switch>
      </Router>
    </>
  );
};

export default Routing;
