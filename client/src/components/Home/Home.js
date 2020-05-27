import React, { useContext, Component } from "react";
import { useAuth0 } from "../../contexts/auth0-context";
import "bulma/css/bulma.css";
import "./Home.css";
import history from "../../history";
import { Link } from "react-router-dom";

export default function Home() {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();

  return (
    <>
      <h1>You are logged in!</h1>
      <p>Hello, {user.name}.</p>

      {user.picture && <img src={user.picture} alt="My Avatar" />}
      <hr />

      {/* <!--Section with buttons--> */}
      <div className="homeContainer">
        <div className="row">
          <div className="col">
            <Link
              type="button"
              className="btn btn-lg btn-outline-warning"
              to={{
                pathname: "/New",
              }}
            >
              Write New Log
            </Link>
          </div>
          <div className="col">
            <Link
              type="button"
              className="btn btn-lg btn-outline-success"
              to={{ pathname: "/Past" }}
            >
              Review Past Logs
            </Link>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-lg btn-outline-info"
              onClick={() => {
                history.push("/Analysis");
              }}
            >
              Review Sentiment Analysis
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => logout({ returnTo: window.location.origin })}
        className="button logout-btn is-dark"
      >
        Logout
      </button>
    </>
  );
}
