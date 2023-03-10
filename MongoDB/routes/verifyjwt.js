const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers["access-token"];
  if (!token) return res.send("Access Denied");

  try {
    const verify = jwt.verify(token, process.env.SECRET);
    req.user = verify;
    next();
  } catch (error) {
    res.status(401).send("Invalid access token");
  }
};

module.exports = verifyToken;
