import React from "react";
import { useAuth0 } from "../../contexts/auth0-context";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();

  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between headerNav">
          <Link to="/" id="logoHeader" className="navbar-item">
            PSYKHE
          </Link>

          {!isLoading && user && (
            <form class="form-inline">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/New" className="nav-link">
                    New Log
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/Past" className="nav-link">
                    Past Logs
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/Insights" className="nav-link">
                    Insights
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/Results" className="nav-link">
                    Results
                  </Link>
                </li>
                <li class="nav-item">
                  <button
                  type="button"

                    onClick={() => logout({ returnTo: window.location.origin })}
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
    </>
  );
}
