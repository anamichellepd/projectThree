const PersonalityInsightsV3 = require('ibm-watson/personality-insights/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
const fs = require("fs")

const personalityInsights = new PersonalityInsightsV3({ version: '2017-10-13'});

fs.readFile("test.txt", "utf8", function(err, data){
    if (err) {
        return console.log(err);
    }
    let text = data;

    // console.log(text);

    personalityInsights.profile(
        {
          content: text,
          contentType: 'text/plain',
          consumptionPreferences: true
        })
        .then(response => {
          console.log(JSON.stringify(response.result, null, 2));
        })
        .catch(err => {
          console.log('error: ', err);
        });
});

