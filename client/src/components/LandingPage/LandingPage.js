import React from "react";
import { useAuth0 } from "../../contexts/auth0-context";
import "./LandingPage.css";

export default function LandingPage() {
  const { isLoading, user, loginWithRedirect } = useAuth0();

  return (
    <div className="container-fluid landingContainer">
      <div className="row">
        <div className="col">
          <div className="jumbotron">
            <h1 className="display-4 titleOnLanding">Psykhe</h1>
            <p className="lead landingP1">
              Create a personal journal and get feedback of your emotions and
              tone.
            </p>
            <hr className="my-4" />
            <p className="landingP2">
              "Do not dwell in the past, do not dream of the future,
              <br />
              concentrate the mind on the present moment."
              <br />- Buddha
            </p>
          </div>
        </div>
      </div>
      <div className="row d-flex secondLandingRow">
        <div className="col-md-6">
          <div id="carousel" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
              <li
                data-target="#carousel"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#carousel" data-slide-to="1"></li>
              <li data-target="#carousel" data-slide-to="2"></li>
            </ul>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://cdn.pixabay.com/photo/2018/04/21/15/21/meditation-3338691_960_720.jpg"
                  alt="Meditate at Sunset"
                />
                <div className="carousel-caption">
                  <h3>Write Logs</h3>
                  <p>Express yourself.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://miro.medium.com/max/4000/0*KchZookuM-KupSv2.jpg"
                  alt="Majestic Mountains"
                />
                <div className="carousel-caption">
                  <h3>View Past Logs</h3>
                  <p>Compare your now to your before</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.lionsroar.com/wp-content/uploads/2003/12/bamboo.jpg"
                  alt="Balboo Forest"
                />
                <div className="carousel-caption">
                  <h3>Analyze your Sentiments</h3>
                  <p>Learn more about yourself</p>
                </div>
              </div>
            </div>

            <a
              className="carousel-control-prev"
              href="#carousel"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </a>
            <a
              className="carousel-control-next"
              href="#carousel"
              data-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <form className="formWithLogin">
            <div className="buttonDiv">
              {!isLoading && !user && (
                <>
                  <button
                    onClick={() => loginWithRedirect({})}
                    type="button"
                    class="btn btn-lg loginBtn"
                  >
                    Log in
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
