const express = require('express')
const router  = express.Router()
const bodyParser = require('body-parser')
const Donation = require('../models/Donation.js')

router.use(bodyParser.urlencoded({ extended:true}))
router.use(bodyParser.json())

router.get('/api/donations',function(req,res,next){
    Donation.find(function(err,donations){
        if (err) return next(err)
        //console.log(donations)
        res.json(donations)
    })
})

router.get('/api/donations/:id',function(req,res,next){
    Donation.findById(req.params.id,function(err,donation){
        if (err) return next(err)
        //console.log(req.params)
        res.json(donation)
    })
})
router.put('/api/donations/:id',function(req,res,next){
    //console.log(req.params.id)
    Donation.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,donation){
        if(err) return next(err)
        res.json(donation)
    })
})
router.delete('/api/donations/:id',function(req,res,next){
    Donation.findByIdAndRemove(req.params.id,function(err,donation){
        if (err) return next(err)
        res.json(donation)
    })
})

router.post('/api/donations',function(req,res,next){
    Donation.create(req.body,function(err,donation){
        if(err)return next(err)
        res.json(donation)
    })
})

module.exports = router
