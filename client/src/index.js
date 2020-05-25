import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes/Routes";
import { Auth0Provider } from "./contexts/auth0-context";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Auth0Provider>
    <Router>
      <React.StrictMode>
        <App />
        <Routes />
      </React.StrictMode>
    </Router>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
