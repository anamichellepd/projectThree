import React from "react";
import "./sentimentAnalysis.css";
import Header from "../Header/Header";
import Calendar from "../Calendar/Calendar";

export default function sentimentAnalysis() {
  return (
    <>
      <Header />
      <div className="container-fluid containerAnalysis">
        <div className="row">
          <div className="col">
            <h2 className="h2Analysis">Personality Insights</h2>
          </div>
        </div>
        <div className="row" id="calendarRowAnalysis">
          <div className="col offset-md-2" id="startRow">
            <h4 className="h4Analysis">Start Date</h4>
            <Calendar />
          </div>
          <div className="col" id="endCol">
            <h4 className="h4Analysis">End Date</h4>
            <Calendar />
          </div>
        </div>
        <div className="row" id="submitRowAnalysis">
          <div className="col offset-md-2">
            <button type="button" className="btn btn-primary submitBtnAnalysis">
              Submit
            </button>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </>
  );
}
