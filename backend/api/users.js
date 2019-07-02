// const express = require('express')
// const router  = express.Router()
// const bodyParser = require('body-parser')
// const User = require('../models/User.js')

// router.use(bodyParser.urlencoded({ extended:true}))
// router.use(bodyParser.json())

// router.get('/api/users',function(req,res,next){
//     User.find(function(err,users){
//         if (err) return next(err)
//         //console.log(users)
//         res.json(users)
//     })
// })

// router.get('/api/users/:id',function(req,res,next){
//     User.findById(req.params.id,function(err,user){
//         if (err) return next(err)
//         //console.log(req.params)
//         res.json(user)
//     })
// })
// router.put('/api/users/:id',function(req,res,next){
//     //console.log(req.params.id)
//     User.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,user){
//         if(err) return next(err)
//         res.json(user)
//     })
// })
// router.delete('/api/users/:id',function(req,res,next){
//     User.findByIdAndRemove(req.params.id,function(err,user){
//         if (err) return next(err)
//         res.json(user)
//     })
// })

// router.post('/api/users',function(req,res,next){
//     User.create(req.body,function(err,user){
//         if(err)return next(err)
//         res.json(user)
//     })
// })
// module.exports = router


const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const auth = require('../functions/verifyToken');
const jwtKey = require('../data/jwtKey');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

// !!!!!!  by Oleg (removed auth.verifyAdmin to bypass auth verification) !!!!!!
//* Get All Users
// router.get('/api/users', auth.verifyAdmin, (req, res, next) => {
//   //*If verified, return results
//   User.find((err, users) => {
//     if (err) console.log('error:', err);
//     res.json(users);
//   })
// });

router.get('/api/users', (req, res, next) => {
  //*If verified, return results
  User.find((err, users) => {
    if (err) console.log('error:', err);
    res.json(users);
  })
})


// *Get User by ID !!!! change by Oleg  !!!
// router.get('/api/users/:id', auth.verifyAdmin, (req, res, next) => {
//   let id = req.query.id;
//   User.findById(id, (err, user) => {
//     if (err) console.log('error:', err);
//     res.json(user);
//   })
// })

// Get User by ID
router.get('/api/users/:id', function(req, res, next){
  User.findById(req.params.id, function(err, user){
      if (err) return next(err)
      //console.log(req.params)
      res.json(user)
  });
});

// *Update User by ID
// router.put('/api/users', auth.verifyToken, (req, res, next) => {
//   let id = req.query.id;
//   User.findOneAndUpdate({_id:id},req.body.user,(err,user)=>{
//     if (err) console.log('error:', err);
//     res.json(req.body.user);
//   })
// })

// update a specific donation type
router.put('/api/users/:id', 
           function(req, res, next){
    // console.log(req.params.id)
    User.findByIdAndUpdate(req.params.id, 
                          req.body, 
                          {new:true}, 
                          function(err, user){
        if(err) return next(err)
        res.json(user)
    });
});

// *Delete User by ID
// router.delete('/api/users', auth.verifyAdmin, (req, res, next) => {
//   let id = req.query.id;
//   User.findOneAndDelete({_id:id},(err,user)=>{
//     if (err) console.log('error:', err);
//     res.json(user);
//   })
// })

router.delete('/api/users/:id', function(req, res, next){
  User.findByIdAndRemove(req.params.id, function(err, user){
      if (err) return next(err)
      res.json(user)
  })
})

//* Post User
// router.post('/api/users', auth.verifyAdmin, (req, res, next) => {
//   User.create(req.body, (err, user) => {
//     if (err) console.log('error:', err);
//     res.json(user);
//   })
// })

router.post('/api/users', (req, res, next) => {
  User.create(req.body, (err, user) => {
    if (err) console.log('error:', err);
    res.json(user);
  })
})

// router.post('/api/users', function(req, res, next){
//   User.create(req.body, (err, user){
//       if(err) console.log('error:', err);
//       res.json(user)
//   });
// });


module.exports = router;