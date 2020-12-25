const express = require('express')
//const { signUpReseller, loginReseller, protectReseller } = require('../controllers/authController')
const { getAllResellers } = require('../controllers/resellerController')


const router = express.Router()

router.route('/').get(getAllResellers)
// router.route('/signup').post(signUpReseller)
// router.route('/login').post(loginReseller)

module.exports = router