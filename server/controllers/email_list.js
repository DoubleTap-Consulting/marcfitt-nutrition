const emailListController = {}
const request = require('request-promise');


emailListController.addToRiseEmailList = (req, res) => {
  const config = {
    method: 'POST',
    uri: process.env.RISE_URL,
    body: {
      "email_address": req.body.email,
      "status": "subscribed",
      "merge_fields": {
        "BIRTHDAY": req.body.birthday,
        "GENDER": req.body.gender,
        "FNAME": req.body.firstName,
        "LNAME": req.body.lastName
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
        message: 'Success'
      })
    })
    .catch((err) => {
      res.status(400).send({
        message: 'Failure'
      })
    });
}

module.exports = emailListController