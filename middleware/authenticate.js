const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  console.log(authHeader);
  const token = authHeader
  console.log(token);
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, "SECRET", (err, userName) => {
    console.log(err)

    if (err) return res.sendStatus(403)

    req.userName = userName;
    console.log(userName);

    next()
  });
};
module.exports={authenticateToken};