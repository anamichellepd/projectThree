import React from "react";
import { useAuth0 } from "../../contexts/auth0-context";
import { Link } from "react-router-dom";
import "./Header.css";

import history from "../../history";

export default function Header() {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();

  return (
    <header>
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-menu is-active">
            {/*logo*/}
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">
                PSYKHE
              </Link>
            </div>
            {/*menu items*/}
            <div className="navbar-end">
              {/* if there is no user. show the login button*/}
              {!isLoading && !user && (
                <button onClick={loginWithRedirect} className="navbar-item">
                  Login
                </button>
              )}
              {/* if there is a user.  show user name and logout button */}
              {!isLoading && user && (
                <>
                  <Link to="/New" className="navbar-item">
                    New Log
                  </Link>
                  <Link to="/Past" className="navbar-item">
                    Past Logs
                  </Link>
                  <Link to="/Analysis" className="navbar-item">
                    Analysis
                  </Link>

                  <button className="navbar-item">{user.name}</button>
                  <button
                    onClick={() => logout({ returnTo: window.location.origin })}
                    className="navbar-item"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
