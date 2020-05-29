const Log = require("../models/log");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev--yit7ecl.auth0.com/.well-known/jwks.json",
  }),
  audience: "https://project3",
  issuer: "https://dev--yit7ecl.auth0.com/",
  algorithms: ["RS256"],
});
module.exports = (app) => {
  app.post("/api/log", checkJwt, (req, res) => {
    console.log(req.body);

    const log = new Log({
      date: Date.now(),
      body: req.body.bodyText,
      userID: req.user.sub,
    });

    //
    log.save().then(() => {
      res.send("This worked!");
    });
  });

  app.get("/api/logs", checkJwt, (req, res) => {
    Log.find({ userId: req.user.sub }, function (err, docs) {
      console.log(docs);
      res.json(docs);
    });
  });
};
