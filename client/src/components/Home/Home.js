import React, { useContext } from "react";
import { useAuth0 } from "../../contexts/auth0-context";
import "bulma/css/bulma.css";
import "./Home.css";
import history from "../../history";
// import "./LandingPage.css";

export default function Home() {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();

  return (
    <>
      <h1>You are logged in!</h1>
      <p>Hello {user.name}</p>

      {user.picture && <img src={user.picture} alt="My Avatar" />}
      <hr />

      {/* <!--Section with buttons--> */}
      <div className="homeContainer">
        <div className="row">
          <div className="col">
            <button
              type="button"
              className="btn btn-lg btn-outline-warning"
              onClick={() => {
                history.push("/New");
              }}
            >
              Write New Log
            </button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-lg btn-outline-success">
              Review Past Logs
            </button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-lg btn-outline-info">
              Review Sentiment Analysis
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => logout({ returnTo: window.location.origin })}
        className="button is-small is-dark"
      >
        Logout
      </button>
    </>
  );
}
