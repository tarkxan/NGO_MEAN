const express = require('express')
const router  = express.Router()
const bodyParser = require('body-parser')
const DonationType = require('../models/DonationType.js')

router.use(bodyParser.urlencoded({ extended:true}))
router.use(bodyParser.json())

// add a donation type
router.post('/api/donation_types', function(req, res, next){
    DonationType.create(req.body, function(err, donation_type){
        if(err)return next(err)
        res.json(donation_type)
    });
});

// get all donation types
router.get('/api/donation_types', function(req, res, next){
    DonationType.find(function(err, donation_types){
        if (err) return next(err)
        console.log(donation_types)
        res.json(donation_types)
    });
});

// get a specific donation type
router.get('/api/donation_types/:id', function(req, res, next){
    DonationType.findById(req.params.id, function(err, donation_type){
        if (err) return next(err)
        //console.log(req.params)
        res.json(donation_type)
    });
});

// update a specific donation type
router.put('/api/donation_types/:id', 
           function(req, res, next){
    // console.log(req.params.id)
    DonationType.findByIdAndUpdate(req.params.id, 
                                   req.body, 
                                   {new:true}, 
                                   function(err, donation_type){
        if(err) return next(err)
        res.json(donation_type)
    });
});

//delete a specific donation type
// router.delete('/api/donation_types/:id', function(req, res, next){
//     DonationType.findByIdAndRemove(req.params.id, req.body, function(err, donation_type){
//         if (err) return next(err)
//         res.json(donation_type)
//     });
// });

module.exports = router
