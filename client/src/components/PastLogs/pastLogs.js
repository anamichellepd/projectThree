import React from "react";
// import { useAuth0 } from "../contexts/auth0-context";
import "bulma/css/bulma.css";
import "./pastLogs.css";
import Header from "../Header/Header";

export default function pastLogs() {
  // const { isLoading, user, loginWithRedirect, logout } = useAuth0();

  return (
    <>
    <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col offset-md-2">
            <h2>Past Logs</h2>
          </div>
        </div>
        <div clasName="row" id="selectDateRow">
          <div className="col offset-md-2">
            <h4>Select Date</h4>

            {/* insert date/calendar npm package thing here */}
          </div>
          <div className="col">
            <h4>(Date)</h4>
            {/* disabled text area of past log */}
            <div className="input-group">
              <textarea className="form-control"></textarea>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </>
  );
}
