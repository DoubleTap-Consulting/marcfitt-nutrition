const nutritionRouter = require('express').Router()
const nutritionController = require('../controllers/nutrition')

nutritionRouter.route('/')
    .post(nutritionController.sendStats)

module.exports = nutritionRouter