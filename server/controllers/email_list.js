const emailListController = {}
const request = require('request-promise');
const MD5 = require('crypto-js/md5');

emailListController.addToRiseEmailList = (req, res) => {
  console.log('Performing: add to email list')
  const hash = MD5(req.body.email_address.toLowerCase());
  let getStatus = 'Added';

  const getConfig = {
    method: 'GET',
    uri: process.env.RISE_URL + '/' + hash.toString(),
    headers: {
      'Authorization': process.env.RISE_API
    },
    json: true
  }

  const putConfig = {
    method: 'PUT',
    uri: process.env.RISE_URL + '/' + hash.toString(),
    body: {
      "email_address": req.body.email_address,
      "status_if_new": "subscribed",
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

  request(getConfig)
    .then((status) => {
      getStatus = 'Updated'
      console.log('getStatus', status)
    })
    .catch((err) => {
      console.log('getError', err)
    });

  request(putConfig)
    .then((status) => {
      res.status(200).send({
        message: getStatus,
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