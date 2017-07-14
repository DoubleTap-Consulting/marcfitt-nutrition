const rootRouter = require('express').Router()
const nutritionRouter = require('./nutrition')

rootRouter.use('/nutrition', nutritionRouter)

module.exports = rootRouter