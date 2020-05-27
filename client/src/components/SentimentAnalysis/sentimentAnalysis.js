import React from "react";
// import { useAuth0 } from "../contexts/auth0-context";
import "bulma/css/bulma.css";
import "./sentimentAnalysis.css";

export default function sentimentAnalysis() {
  // const { isLoading, user, loginWithRedirect, logout } = useAuth0();

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h2>Sentiment Analysis</h2>
          </div>
        </div>
        <div className="row">
          <div className="col offset-md-3" id="startRow">
            <h4>Select Start Date</h4>

            {/* insert date/calendar npm package thing here */}
          </div>
          <div className="col" id="endCol">
            <h4>Select End Date</h4>

            {/* insert date/calendar npm package thing here */}

            <button type="button" className="btn btn-primary">
              Submit
            </button>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </>
  );
}
