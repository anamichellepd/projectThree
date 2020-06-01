import { withRouter } from "react-router-dom";
import React, { useState, useContext } from "react";
// import { useAuth0 } from "../contexts/auth0-context";
import { Auth0Context } from "../../contexts/auth0-context";
import { Link } from "react-router-dom";
import { useAuth0 } from "../../contexts/auth0-context";

import API from "../../utils/API";

import "./newLog.css";

import Header from "../Header/Header";

const NewLog = function () {
  const [body, setBody] = useState("");
  const { user, getTokenSilently } = useContext(Auth0Context);

  const { isLoading, logout } = useAuth0();

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between headerNav">
          <Link to="/" id="logoHeader" className="navbar-item">
            Psykhe
          </Link>

          {!isLoading && user && (
            <form className="form-inline">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto nav-pills">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/New" className="nav-link active" id="activePage">
                      New Log
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Past" className="nav-link">
                      Past Logs
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Results" className="nav-link">
                      Results
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      onClick={() =>
                        logout({ returnTo: window.location.origin })
                      }
                      className="navbar-item btn btn-light headerLogoutBtn"
                    >
                      {user.name}: Logout
                    </button>
                  </li>
                </ul>
              </div>
            </form>
          )}
        </nav>
      </header>
      <div className="container-fluid newLogContainer">
        <div className="row">
          <div className="col offset-md-2">
            <h2 className="newLogH2">Write New Log</h2>
          </div>
        </div>
        <div className="row" id="describeDayRow">
          <div className="col offset-md-2">
            <h4 className="newLogH4">Describe Your Day</h4>
            <form action="" id="paperNewLog">
              <div className="form-group">
                <textarea
                  className="form-control textAreaNewLog"
                  id="body"
                  rows="13"
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary submitNewLogBtn"
                onClick={async (e) => {
                  e.preventDefault();
                  let token = await getTokenSilently();

                  API.saveLog(body, token).then((response) => {
                    console.log(response);
                  });
                  require.config({
                    paths: {
                      jquery:
                        "//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery",
                      bootstrap:
                        "//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min",
                      bootbox: "//cdn.jsdelivr.net/bootbox/4.3.0/bootbox",
                    },
                    shim: {
                      bootstrap: { deps: ["jquery"] },
                    },
                  });

                  require(["jquery", "bootstrap", "bootbox"], function (
                    jq,
                    bs,
                    bootbox
                  ) {
                    var dialog = bootbox.dialog({
                      message:
                        '<p><i class="fa fa-spin fa-spinner"></i>Saving your log...</p>',
                    });

                    dialog.init(function () {
                      setTimeout(function () {
                        dialog
                          .find(".bootbox-body")
                          .html("Success! Your log has been saved.");
                      }, 2000);
                    });
                  });
                }}
              >
                Submit
              </button>
              <Link
                type="button"
                className="btn btn-lg btn-warning resultsNewLogBtn"
                to={{ pathname: "/Results" }}
              >
                Insights
              </Link>
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
                <li className="list-group-item">What is your favorite item you've bought this year?</li>
                <li className="list-group-item">What is your absolute dream job?</li>
                <li className="list-group-item">What's the best piece of advice you've ever been given?</li>
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
