import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "../components/Home/Home";
import newLog from "../components/NewLog/newLog";
import pastLogs from "../components/PastLogs/pastLogs";
import sentimentAnalysis from "../components/SentimentAnalysis/sentimentAnalysis";

export default class Routes extends Component {
  render() {
    return (
      <Router pastLogs={pastLogs}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/New" component={newLog} />
          <Route path="/Past" component={pastLogs} />
          <Route path="/Analysis" component={sentimentAnalysis} />
        </Switch>
      </Router>
    );
  }
}
