const emailListController = {}
const request = require('request-promise');


emailListController.addToRiseEmailList = (req, res) => {
  console.log('Performing: add to email list')
  console.log('body', req.body)
  const config = {
    method: 'POST',
    uri: process.env.RISE_URL,
    body: {
      "email_address": req.body.email_address,
      "status": "subscribed",
      "merge_fields": {
        "BIRTHDAY": req.body.birthday,
        "GENDER": req.body.gender
      }
    },
    headers: {
      'Authorization': process.env.RISE_API
    },
    json: true
  }

  request(config)
    .then((status) => {
      res.status(200).send({
        message: 'Success',
        response: status
      })
    })
    .catch((err) => {
      res.status(400).send({
        message: 'Failure',
        error: err
      })
    });
}

module.exports = emailListController