import React, { useState, useEffect } from "react";
import PersonalityInsightsV3 from 'ibm-watson/personality-insights/v3';
import axios from "axios";
import { get } from "mongoose";
const { BearerTokenAuthenticator } = require( 'ibm-watson/auth');

export default function PersonalityGraph(props) {
    const [results, setResults] = useState([]);

    async function getToken() {
        let token = await axios.get('/api/token');
        return token;
    }

    useEffect(() => {
        const getPersonality = async() => {
            const token = await getToken().then((token) => {
                console.log(token);
                
                // const personalityInsights =  new PersonalityInsightsV3({
                //     authenticator: new BearerTokenAuthenticator({
                //       bearerToken: credentials.accessToken,
                //     }),
                //     url: credentials.url,
                //     version: '2017-10-13',
                //   });
                //   const profileParams = {
                //     content: JSON.stringify(props.pastLogs),
                //     contentType: 'application/json',
                //     consumptionPreferences: true,
                //     rawScores: true,
                //     };
                // personalityInsights.profile(profileParams)
                // .then(response => {
                //     console.log(JSON.stringify(response.result, null, 2));
                //     setResults(JSON.stringify(response.result, null, 2));
                // })
                // .catch(err => {
                //     console.log('error: ', err);
                // });      
              });
            }
                
        getPersonality();
    }, [props.pastLogs]);

  return (
    <>
    <div>Hello World</div> 
    {console.log(results)}
    </>
  );
}