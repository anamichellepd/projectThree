import React, { useContext } from "react";
import Header from "./components/Header/Header";
import LandingPage from "../src/components/LandingPage/LandingPage";
import Routes from "../src/Routes/Routes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

import newLog from "../src/components/NewLog/newLog";
import pastLogs from "../src/components/PastLogs/pastLogs";
import sentimentAnalysis from "../src/components/SentimentAnalysis/sentimentAnalysis";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/New" component={withRouter(newLog)} />
          <Route path="/Past" component={pastLogs} />
          <Route path="/Analysis" component={sentimentAnalysis} />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
