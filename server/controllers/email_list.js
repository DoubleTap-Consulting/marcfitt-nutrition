const emailListController = {}
const request = require('request-promise');
const MD5 = require('crypto-js/md5');

emailListController.addToRiseEmailList = (req, res) => {
  console.log('Performing: add to email list')
  const hash = MD5(req.body.email_address.toLowerCase());
  const config = {
    method: 'PUT',
    uri: process.env.RISE_URL + '/' + hash.toString(),
    body: {
      "email_address": req.body.email_address,
      "status_if_new": "subscribed",
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
      console.log('status', status)
      res.status(200).send({
        message: 'Added',
        response: status
      })
    })
    .catch((err) => {
      console.log('err', err)
      res.status(400).send({
        message: 'Failed to add or update',
        error: err
      })
    });
}

module.exports = emailListController