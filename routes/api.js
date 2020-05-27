import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "../components/Home/Home";
import newLog from "../components/NewLog/newLog";
import pastLogs from "../components/PastLogs/pastLogs";
import sentimentAnalysis from "../components/SentimentAnalysis/sentimentAnalysis";
import history from "../history";
import LandingPage from "../components/LandingPage/LandingPage";

export default function Routes() {
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

// const router = require ("express").Router();
// const Log = require ("../models/log.js");

// //POSTING NEW LOG
// router.post ("/api/log", (req,res)=>{
// Log.create({}).then((logSchema)=>{
//     res.json(logSchema);
// }).catch((err)=>{res.json(err);
// });
// });

// //FINDING A LOG BY ID

// //DELETING A LOG
// router.delete("api/log",({body},res)=>{
//     Log.findByIdAndDelete(body.id).then(()=>{
//         res.json(true);
//     }).catch((err)=>{res.json(err)})
// });
// module.exports=router;
