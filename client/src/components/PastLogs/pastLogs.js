import React, { useState, useEffect, useContext } from "react";
import "./pastLogs.css";
import Header from "../Header/Header";
import API from "../../utils/API";
import { Auth0Context } from "../../contexts/auth0-context";
import { Link } from "react-router-dom";
import { useAuth0 } from "../../contexts/auth0-context";

export default function PastLogs() {
  const [logs, setLogs] = useState([]);
  const { user, getTokenSilently } = useContext(Auth0Context);

  const [pastLogs, setPastLogs] = useState([]);

  const { isLoading, logout } = useAuth0();

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
        console.log("first one", res.data);
        const pastStuff = res.data.map((log) => {
          return log.body[0];
        });
        console.log(pastStuff);

        // const pastlogs = [];
        // for (let i = 0; i < res.data.length; i++) {
        //   pastlogs.push(res.data[i].body);
        // }
        // console.log(pastlogs);
        setPastLogs(pastStuff);
      });
    });
  }, [user]);

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
                    <Link to="/Past" className="nav-link active" id="activePage">
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
      <div className="container-fluid pastLogsContainer">
        <div className="row">
          <div className="col offset-md-3">
            <h2 className="pastLogsH2">Past Logs</h2>
          </div>
        </div>
        <div className="row" id="formRow">
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
