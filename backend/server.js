const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const donations = require('./api/donations');
const users = require('./api/users');
const donation_types = require('./api/donation_types');

const cors = require('cors')
const jwt = require('jsonwebtoken');
const jwtKey = require('./data/jwtKey');
const User = require('./models/User');


app.use(cors());

app.use('/', donations);
app.use('/', users);
app.use('/', donation_types);
app.use('/', users);

mongoose.connect('mongodb://localhost/dbNGO')
    .then(()=>console.log('connected to db'))
    .catch((err)=>console.log('encountered error'))

app.get('/',(req, res)=>{
    //chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security --in windows run
    res.header('Access-Control-Allow-Origin','http://localhost:4200');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    return res.send();
});

app.listen(port,()=>console.log('listening on port 3000'));

app.post('/', (req, res) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
})

// app.delete('/', (req, res) => {
//   const typeName = req.params.typeName;
//   const details = { 'type_name': new ObjectID(typeName) };
//   db.collection('donationtypes').remove(details, (err, item) => {
//     if (err) {
//       res.send({'error':'An error has occurred'});
//     } else {
//       res.send('Type Name ' + typeName + ' deleted!');
//     } 
//   });
// });

// app.delete('/', (req, res) => {
//   const typeName = req.params.typeName;
//   // const details = { 'type_name': new ObjectID(typeName) };
//   db.collection('donationtypes').remove(typeName, (err, item) => {
//     if (err) {
//       res.send({'error':'An error has occurred'});
//     } else {
//       res.send('Type Name ' + typeName + ' deleted!');
//     } 
//   });
// });

app.post('/login', (req, res) => {

    //* [CURRENT METHOD] Retreives email and pass from headers (user.service)
  
    const _email = req.headers['email'];
    const _password = req.headers['password'];
    console.log('login route');
    console.log(_email);
    console.log(_password);
    //* LOGIN: Check user and password
    User.findOne({'email': _email,'password':_password},(err, user) => {
      // User.find((err, user) => {
    // User.findById(req.params.id,function(err,user){
    
      console.log('Find result');
      console.log(user);
      if (err) console.log('error:', err);
      // Send data back based what is found and returned from the database
      if (user !== null) {
        jwt.sign({user}, jwtKey, (err, token) => {
          res.json({
            token: token,
            userData: JSON.stringify(user)
          })
          console.log(token);
          console.log(err);
        })
      } else {
        res.json(null);
      }
    })
  })
