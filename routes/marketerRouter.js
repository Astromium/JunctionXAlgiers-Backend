const express = require('express')
const { loginMarketer, signUpMarketer } = require('../controllers/authController')
const { getMarketers, addReseller } = require('../controllers/marketerController')

const router = express.Router()

router.route('/').get(getMarketers)
router.route('/signup').post(signUpMarketer)
router.route('/login').post(loginMarketer)
router.route('/addSeller').post(addReseller)

module.exports = router
