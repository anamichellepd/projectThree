import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "../components/Home/Home";
import newLog from "../components/NewLog/newLog";
import pastLogs from "../components/PastLogs/pastLogs";
import sentimentAnalysis from "../components/SentimentAnalysis/sentimentAnalysis";
import history from "../history";
import LandingPage from "../components/LandingPage/LandingPage";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/New" component={newLog} />
          <Route path="/Past" component={pastLogs} />
          <Route path="/Analysis" component={sentimentAnalysis} />
        </Switch>
      </Router>
    );
  }
}
