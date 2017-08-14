const nutritionRouter = require('express').Router()
const nutritionController = require('../controllers/nutrition')

nutritionRouter.route('/stats/email')
    .post(nutritionController.sendEmailStats)

module.exports = nutritionRouter