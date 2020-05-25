require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const jwt = require("express-jwt");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//to get mongoose

try {
  mongoose.connect(process.env.PSYKHE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDb connected successfully!");
} catch (error) {
  console.log(error);
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
