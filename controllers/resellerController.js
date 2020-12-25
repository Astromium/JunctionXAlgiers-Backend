const Reseller = require('../models/resellerModel')
const catchAsync = require('../utils/catchAsync')

exports.getAllResellers = catchAsync(async (req, res, next) => {
    const resellers = await Reseller.find({}).sort('-createdAt')

    res.status(200).json({
        status: 'success',
        resellers
    })
})

exports.updateReseller = catchAsync(async (req, res, next) => {
    const reseller = await Reseller.findByIdAndUpdate(req.user.id, req.body)

    res.status(200).json({
        status: 'success',
        reseller
    })
})