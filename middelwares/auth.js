// const jwt = require("jsonwebtoken");

// const auth = (req, res, next) => {
//   const token = req.headers.authorization;

//   if (!token) {
//     res.redirect("/");
//     res.status(401).json({ message: "Authentication failed , Token missing" });
//   }
//   try {
//     const decode = jwt.verify(token, "secret_key");
//     req.user = decode;
//     next();
//   } catch (err) {
//     res.status(500).json({ message: "Authentication failed. Invalid token." });
//   }
// };

// module.exports = auth;
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  // Retrieve the token from the cookies
  const token = req.cookies.authToken;

  if (!token) {
    return res.status(401).json({
      message: "unauthenticated",
    });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, "secret_key");
    req.user = decoded; // Attach the decoded payload (e.g., userId) to the `req` object
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    return res.status(401).json({
      message: "unauthenticated",
    });
  }
};

module.exports = auth;
