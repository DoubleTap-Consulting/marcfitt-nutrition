const rootRouter = require('express').Router()
const nutritionRouter = require('./nutrition')
const emailListRouter = require('./email_list')

rootRouter.use('/nutrition', nutritionRouter)
rootRouter.use('/email_list', emailListRouter)

module.exports = rootRouter