import React, { useContext } from "react";
import { useAuth0 } from "../contexts/auth0-context";
import "bulma/css/bulma.css";
import Home from "./Home";
// import "./LandingPage.css";

export default function LandingPage() {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();

  return (
    <div className="hero is-info is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          {!isLoading && !user && (
            <>
              <h1>Click Below!</h1>
              <button onClick={loginWithRedirect} className="button is-danger">
                Login
              </button>
            </>
          )}

          {!isLoading && user && (
            <>
              <Home />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
