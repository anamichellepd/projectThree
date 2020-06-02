require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const jwt = require("express-jwt");
const { IamTokenManager } = require('ibm-watson/auth');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

if (!process.env.PERSONALITY_INSIGHTS_APIKEY) {
  console.log('This example requires the PERSONALITY_INSIGHTS_APIKEY environment variable');
  process.exit(1);
}

const personalityAuthenticator = new IamTokenManager({
  apikey: process.env.PERSONALITY_INSIGHTS_APIKEY,
});

//if deployed, use the deployed databas. otherwise use the local psykhe database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/psykhe";

//to get mongoose
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("MongoDB connected successfully");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/logs")(app);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

app.get('/api/token', function (req, res) {
  return personalityAuthenticator
    .requestToken()
    .then(({ result }) => {
      res.json({ accessToken: result.access_token, url: process.env.PERSONALITY_INSIGHTS_URL });
    })
    .catch(console.error);
});