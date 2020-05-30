import { withRouter } from "react-router-dom";
import React, { useState, useContext } from "react";
// import { useAuth0 } from "../contexts/auth0-context";
import { Auth0Context } from "../../contexts/auth0-context";

import API from "../../utils/API";

import "./newLog.css";

import Header from "../Header/Header";

const NewLog = function () {
  const [body, setBody] = useState("");
  const { user, getTokenSilently } = useContext(Auth0Context);

  return (
    <>
      <Header />
      <div className="container-fluid newLogContainer">
        <div className="row">
          <div className="col offset-md-2">
            <h2 className="newLogH2">Write New Log</h2>
          </div>
        </div>
        <div className="row" id="describeDayRow">
          <div className="col offset-md-2">
            <h4 className="newLogH4">Describe Your Day</h4>
            <form action="" id="paperNewLog">
              <div className="form-group">
                <textarea
                  className="form-control textAreaNewLog"
                  id="body"
                  rows="13"
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary submitNewLogBtn"
                onClick={async (e) => {
                  e.preventDefault();
                  let token = await getTokenSilently();

                  API.saveLog(body, token).then((response) => {
                    console.log(response);
                  });
                  require.config({
                    paths: {
                        "jquery": "//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery",
                        "bootstrap": "//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min",
                        "bootbox": "//cdn.jsdelivr.net/bootbox/4.3.0/bootbox"
                    },
                    shim : {
                        "bootstrap" : { "deps" :['jquery'] }
                    }
                });
                
                require(["jquery", "bootstrap", "bootbox"], function(jq, bs, bootbox) {
                  var dialog = bootbox.dialog({
                    message: '<p><i class="fa fa-spin fa-spinner"></i>Saving your log...</p>'
                });
                            
                dialog.init(function(){
                    setTimeout(function(){
                        dialog.find('.bootbox-body').html('Success! Your log has been saved.');
                    }, 3000);
                });
                });
                }}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="col offset-md-1">
            <div className="card newLogCard">
              <img
                src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/10/15/0/fnd_Ice-Cubes-thinkstock.jpg.rend.hgtvcom.616.462.suffix/1413404558868.jpeg"
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Don't know where to start?</h5>
                <p className="card-text">
                  Try some of these icebreaker topics for ideas.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
              <div className="card-body">
                <a
                  href="https://conversationstartersworld.com/icebreaker-questions/"
                  className="card-link"
                >
                  More...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(NewLog);
