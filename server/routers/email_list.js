const emailListRouter = require('express').Router()
const emailListController = require('../controllers/email_list')

emailListRouter.route('/rise')
    .post(emailListController.addToRiseEmailList)

module.exports = emailListRouter