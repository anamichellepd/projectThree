import React from "react";
import { useAuth0 } from "../../contexts/auth0-context";
import "./Home.css";
import history from "../../history";
import { Link } from "react-router-dom";

export default function Home() {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();

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
                    <Link to="/" className="nav-link active" id="activePage">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/New" className="nav-link">
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
      {/* <!--Section with buttons--> */}
      <div className="container-fluid homeContainer">
        <div className="row" id="loggedInRowHome">
          <div className="col">
            {user.picture && (
              <img className="homeImg" src={user.picture} alt="My Avatar" />
            )}
            <h4 className="homeH4">
              You are logged in!{" "}
              <span className="homeSpan">Hello, {user.name}</span>
            </h4>
          </div>
        </div>
        <div className="row" id="rowOfBtns">
          <div className="col-md-4">
            <Link
              type="button"
              className="btn btn-lg newHomeBtn"
              to={{
                pathname: "/New",
              }}
            >
              Write New Log
            </Link>
          </div>
          <div className="col-md-4 pastHomeCol">
            <Link
              type="button"
              className="btn btn-lg pastHomeBtn"
              to={{ pathname: "/Past" }}
            >
              Review Past Logs
            </Link>
          </div>
          <div className="col-md-4">
            <button
              type="button"
              className="btn btn-lg resultsHomeBtn"
              onClick={() => {
                history.push("/Results");
              }}
            >
              Review Personality Insights
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
