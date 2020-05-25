import React from "react";
// import { useAuth0 } from "../contexts/auth0-context";
import "bulma/css/bulma.css";

export default function pastLogs() {
  // const { isLoading, user, loginWithRedirect, logout } = useAuth0();

  return (
    <>
      <div className="container-fluid" style="padding: 40px">
        <div className="row">
          <div className="col offset-md-2">
            <h2>Past Logs</h2>
          </div>
        </div>
        <div clasName="row" style="margin-top: 60px">
          <div className="col offset-md-2" style="margin-top: 60px">
            <h4>Select Date</h4>

            {/* insert date/calendar npm package thing here */}
          </div>
          <div className="col">
            <h4>(Date)</h4>
            {/* disabled text area of past log */}
            <div className="input-group" style="width: 600px; height: 500px">
              <textarea
                className="form-control"
                style="pointer-events: none"
              ></textarea>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </>
  );
}
