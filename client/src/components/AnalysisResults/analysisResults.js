import React from "react";
import "./analysisResults.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { useAuth0 } from "../../contexts/auth0-context";

export default function AnalysisResults() {
  const { isLoading, user, logout } = useAuth0();

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
                    <Link to="/Results" className="nav-link active" id="activePage">
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
      <div className="container-fluid  resultsContainer">
        <div className="row">
          <div className="col">
            <h2 className="insightsTitle">Personality Insights</h2>
          </div>
        </div>
        <div className="row" id="valuesRow">
          <div className="col-md-4" id="valuesCol">
            <h4 className="h4Results">(Values)</h4>
          </div>
          <div className="col-md-4" id="personalityCol">
            <h4 className="h4Results">(Personality)</h4>
          </div>
          <div className="col-md-4" id="likelyOrUnlikelyCol">
            <h4 className="h4Results">(You are likely/unlikely)</h4>
          </div>
        </div>
        <div className="row" id="rowWithButton">
          <div className="col-md-4">
            <button type="button" className="btn btn-primary shareBtn">
              Share with a Friend
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
