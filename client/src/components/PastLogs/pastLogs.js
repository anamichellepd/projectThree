import React, { useState, useEffect, useContext } from "react";
import "./pastLogs.css";
import Header from "../Header/Header";
import API from "../../utils/API";
import { Auth0Context } from "../../contexts/auth0-context";
import { Link } from "react-router-dom";

export default function PastLogs() {
  const [logs, setLogs] = useState([]);
  const { user, getTokenSilently } = useContext(Auth0Context);

  async function getToken() {
    let token = await getTokenSilently();
    return token;
  }

  useEffect(() => {
    console.log(user);
    const token = getToken().then((token) => {
      // API.getLogs(token).then((response) => {
      //   console.log(response);
      // });

      API.getpastlogs(user.sub, token).then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          console.log(res.data[i].body);
        }
      }, []);
    });
  });

  useEffect(() => {
    function pushpastlogs() {}
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
          <div className="col offset-md-3"></div>
          <div className="col ">
            {/* disabled text area of past log */}
            <div className="input-group" id="inputGroupPastLog">
              <form action="">
                <div className="form-group">
                  <textarea
                    className="form-control textAreaPastLog"
                    id="body"
                    rows="13"
                  ></textarea>
                </div>
                <Link
                  type="button"
                  className="btn btn-lg btn-warning resultsPastLogsBtn"
                  to={{ pathname: "/Results" }}
                >
                  Insights
                </Link>
              </form>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </>
  );
}
