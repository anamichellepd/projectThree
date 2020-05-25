import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "../client/src/components/LandingPage";
import New Log from "./Contact/Contact";
import Past Logs from "./Product/Products";
import Analysis from "./Home/Home";


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Products" component={Products} />
                </Switch>
            </Router>
        )
    }
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