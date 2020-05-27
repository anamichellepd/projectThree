import React from "react";
// import { useAuth0 } from "../contexts/auth0-context";
import "bulma/css/bulma.css";
import history from "../../history";

export default function newLog() {
  // const { isLoading, user, loginWithRedirect, logout } = useAuth0();
  console.log("LOADED");

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col offset-md-3">
            <h2>Write New Log</h2>
          </div>
        </div>
        <div className="row" id="describeDayRow">
          <div className="col offset-md-1">
            <h4>Describe Your Day</h4>
            <div className="input-group">
              <textarea className="form-control"></textarea>
            </div>
            <button type="button" className="btn btn-primary">
              Submit
            </button>
          </div>
          <div className="col offset-md-3">
            <div className="card">
              <img
                src="https://lh3.googleusercontent.com/proxy/b03IrgAtarW7QIt151_KPLrvzvRXrA9K1ixJYeVmk8oqo_HwRjaVxo8_GXTqNmTa0M8gmZ0hUKgRwvh4UlFf2BK6QQXbSCy88JGO9bVbLjIBfhOzsHlTAAAdcx4"
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
}
