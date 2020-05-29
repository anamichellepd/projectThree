import React, { useState, useEffect, useContext } from "react";
import "./pastLogs.css";
import Header from "../Header/Header";
import Calendar from "../Calendar/Calendar";
import API from "../../utils/API";
import { Auth0Context } from "../../contexts/auth0-context";

export default function PastLogs() {
  const [logs, setLogs] = useState([]);
  const { user, getTokenSilently } = useContext(Auth0Context);

  async function getToken() {
    let token = await getTokenSilently();
    return token;
  }

  useEffect(() => {
    const token = getToken();
    API.getLogs(token).then((response) => {
      console.log(response);
    });
  });
  return (
    <>
      <Header />
      <div className="container-fluid pastLogsContainer">
        <div className="row">
          <div className="col offset-md-3">
            <h2 className="pastLogsH2">Past Logs</h2>
          </div>
        </div>
        <div className="row" id="selectDateRow">
          <div className="col offset-md-3">
            <h4 className="selectDateH4">Select Date</h4>
            <Calendar />
          </div>
          <div className="col ">
            {/* date chosen should show here */}
            <h4 className="dateH4">(Date)</h4>
            {/* disabled text area of past log */}
            <div className="input-group" id="inputGroupPastLog">
              <textarea
                className="form-control"
                id="textAreaPastLog"
              ></textarea>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </>
  );
}
