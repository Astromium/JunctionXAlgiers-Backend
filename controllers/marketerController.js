const Marketer = require('../models/marketerModel')
const Reseller = require('../models/resellerModel')
const catchAsync = require('../utils/catchAsync')

exports.getMarketers = catchAsync(async (req, res, next) => {
    const marketers = await Marketer.find({})
    
    res.status(200).json({
        status: 'success',
        marketers
    })
})

exports.addReseller = catchAsync(async (req, res, next) => {
    console.log(req.body);
    const reseller = await Reseller.create(req.body)

    res.status(201).json({
      status: "success",
      reseller,
    });
})