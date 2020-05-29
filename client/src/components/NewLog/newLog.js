import { withRouter } from "react-router-dom";
import React, { useState } from "react";
// import { useAuth0 } from "../contexts/auth0-context";

import API from "../../utils/API";

import "./newLog.css";

import Header from "../Header/Header";

//export default withRouter function newLog() {
const NewLog = function () {
  // const { isLoading, user, loginWithRedirect, logout } = useAuth0();
  // console.log("LOADED");

  const [body, setBody] = useState("");

  console.log(body);

  return (
    <>
      <Header />
      <div className="container-fluid newLogContainer">
        <div className="row">
          <div className="col offset-md-2">
            <h2 className="newLogH2">Write New Log</h2>
          </div>
        </div>
        <div className="row" id="describeDayRow">
          <div className="col offset-md-2">
            <h4 className="newLogH4">Describe Your Day</h4>
            <form action="">
              <div className="form-group">
                <textarea
                  className="form-control textAreaNewLog"
                  id="body"
                  rows="25"
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary submitNewLogBtn"
                onClick={(e) => {
                  e.preventDefault();
                  API.saveLog(body).then((response) => {
                    console.log(response);
                  });
                }}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="col offset-md-1">
            <div className="card newLogCard">
              <img
                src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/10/15/0/fnd_Ice-Cubes-thinkstock.jpg.rend.hgtvcom.616.462.suffix/1413404558868.jpeg"
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Don't know where to start?</h5>
                <p className="card-text">
                  Try some of these icebreaker topics for ideas.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
              <div className="card-body">
                <a
                  href="https://conversationstartersworld.com/icebreaker-questions/"
                  className="card-link"
                >
                  More...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(NewLog);
