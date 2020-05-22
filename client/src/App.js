import React, { useContext } from "react";
import "bulma/css/bulma.css";
import { Auth0Context } from "./contexts/auth0-context";

function App() {
  const { isLoading, user, loginWithRedirect } = useContext(Auth0Context);
  const auth0 = useContext(Auth0Context);
  return (
    <div className="hero is-info is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          {!isLoading && !user && (
            <>
              <h1>Click Below!</h1>
              <button
                onClick={auth0.loginWithRedirect}
                className="button is-danger"
              >
                Login
              </button>
            </>
          )}
          {/* this is the new section */}
          {!isLoading && user && (
            <>
              <h1>You are logged in!</h1>
              <p>Hello {user.name}</p>

              {user.picture && <img src={user.picture} alt="My Avatar" />}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
