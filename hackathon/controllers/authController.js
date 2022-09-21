const jwt = require("jsonwebtoken");

exports.logIn = (req, res) => {
  const userName = req.body.userName;
  const pwd = req.body.pwd;
  const _role = req.body.role;
  const logInInfo = {
    userName: userName,
    pwd: pwd,
    role: _role,
  };
  const _accessToken = jwt.sign(logInInfo, process.env.ACCESS_TOKEN_SEC, {
    expiresIn: "10s",
  });
};
