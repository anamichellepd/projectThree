import React from "react";
import "./analysisResults.css";
import Header from "../Header/Header";

export default function analysisResults() {

  return (
    <>
    <Header />
      <div className="container-fluid resultsContainer">
        <div className="row">
          <div className="col">
            <h2 className="insightsTitle">Personality Insights</h2>
          </div>
        </div>
        <div className="row" id="valuesRow">
          <div className="col-md-4" id="valuesCol">
            <h4>(Values)</h4>
          </div>
          <div className="col-md-4" id="personalityCol">
            <h4>(Personality)</h4>
          </div>
          <div className="col-md-4" id="likelyOrUnlikelyCol">
            <h4>(You are likely/unlikely)</h4>
          </div>
        </div>
        <div className="row" id="rowWithButton">
          <div className="col-md-4">
            <button type="button" className="btn btn-primary shareBtn">
              Share with a Friend
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
