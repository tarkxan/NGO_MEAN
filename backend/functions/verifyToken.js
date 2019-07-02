const jwt = require('jsonwebtoken');
const jwtKey = require('../data/jwtKey');

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verify Token
function verifyToken(req, res, next) {

  //* Get Auth Header Value
  
  const bearerHeader = req.headers['authorization'];
  
  //* Check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    // Split by spaces
    const bearer = bearerHeader.split(' ')
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token of the next request
    req.token = bearerToken
    // Fire next middleware
    next();
  } else {
    console.log('A verifyToken request was denied')
    res.sendStatus(403);
  }
}

function verifyAdmin(req, res, next) {


  //* Get Header Value
  let bearerHeader = req.headers['authorization'];
  //* Check if bearer header is defiend
  if (typeof bearerHeader !== 'undefined') {
    // Split to get token
    console.log(req.headers['role']);
    console.log('bearerHearder');
    console.log(bearerHeader);
    bearerToken = bearerHeader.split(' ')[1];
    console.log('bearerToken');
    console.log(bearerToken);
    //Check if admin
    jwt.verify(bearerToken, jwtKey, (err, authData) => {
      
      //console.log('inside verify');
      //console.log(authData);
      //console.log(authData.user.role);
      //if (authData.user.role === "Admin") {
      if (req.headers['role'] === "Admin") {
        console.log('User is Admin');
        next();
      } else {
        console.log('A verifyAdmin request was Denied')
        res.sendStatus(403);
      }
    });
  } else {
    console.log('A verifyAdmin request was Denied')
    res.sendStatus(403);
  }

}

module.exports = {
  verifyToken,
  verifyAdmin
};