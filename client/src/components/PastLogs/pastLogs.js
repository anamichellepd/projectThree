import React, { useState, useEffect, useContext } from "react";
import "./pastLogs.css";
import API from "../../utils/API";
import { Auth0Context } from "../../contexts/auth0-context";
import { Link } from "react-router-dom";
import { useAuth0 } from "../../contexts/auth0-context";
import PersonalityGraph from "../PersonalityGraph/PersonalityGraph";

export default function PastLogs() {
  const [text, setText] = useState([]);
  const { user, getTokenSilently } = useContext(Auth0Context);

  const [pastLogs, setPastLogs] = useState([]);
  const [date, setDate] = useState([]);

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
        const pastDate = res.data.map((log) => {
          return log.date[0];
        });
        console.log(pastDate);
        console.log(pastStuff);

        // const pastlogs = [];
        // for (let i = 0; i < res.data.length; i++) {
        //   pastlogs.push(res.data[i].body);
        // }
        // console.log(pastlogs);
        setDate(pastDate);
        setPastLogs(pastStuff);

        var logsArray = [];
        for (let i = 0; i < pastStuff.length; i++) {
          var logs = <li>{"\n" + pastDate[i] + " " + pastStuff[i]}</li>;
          logsArray.push(logs);
        }
        setText(logsArray);
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
                    <Link
                      to="/Past"
                      className="nav-link active"
                      id="activePage"
                    >
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
            <div className="input-group" id="inputGroupPastLog">
              <ul className="list">{text}</ul>
            </div>
          </div>
        </div>
        <PersonalityGraph pastLogs={pastLogs}/>
      </div>
    </>
  );
}
