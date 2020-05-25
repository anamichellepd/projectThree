import React from "react";
// import { useAuth0 } from "../contexts/auth0-context";
import "bulma/css/bulma.css";

export default function analysisResults() {
  // const { isLoading, user, loginWithRedirect, logout } = useAuth0();

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h2>Sentiment Analysis</h2>
          </div>
        </div>
        <div className="row" id="valuesRow">
          <div className="col" id="valuesCol">
            <h4>(Values)</h4>
          </div>
          <div className="col" id="personalityCol">
            <h4>(Personality)</h4>
          </div>
          <div className="col" id="likelyOrUnlikelyCol">
            <h4>(You are likely/unlikely)</h4>
          </div>
        </div>
        <div className="row-md-1" id="rowWithButton">
          <div className="col">
            <button type="button" className="btn btn-primary">
              Share with a Friend
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
