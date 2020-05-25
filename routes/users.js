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
  issuer: "https://dev--yit7ecl.auth0.com",
  algorithms: ["RS256"],
});

module.exports = (apps) => {
  apps.get("/users", checkJwt, (req, res) => {
    // the ID is the sub: part
    console.log(req.user);

    res.send("This worked!");
  });
};
