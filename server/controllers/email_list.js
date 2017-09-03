const emailListController = {}
const request = require('request-promise');
const MD5 = require('crypto-js/md5');

emailListController.addToRiseEmailList = (req, res) => {
  console.log('------------')
  console.log('Performing: add to email list: ', req.body.email_address)
  console.log('req -----------', req);
  if (!req.body.email_address) {
    res.status(400).send('No email provided')
  } else {
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
        if (status.status === 'subscribed') {
          getStatus = 'Updated'
        }
        console.log('Found contact with status: ', status.status)
  
        request(putConfig)
          .then((status) => {
            console.log('Successfully updated contact')
            console.log('------------')
            res.status(200).send({
              message: getStatus,
              response: status
            })
          })
          .catch((err) => {
            console.log('err', err.message)
            console.log('------------')
            res.status(400).send({
              message: 'Failed to add or update',
              error: err
            })
          });
      })
      .catch((err) => {
        console.log('getError', err.message)
        request(putConfig)
          .then((status) => {
            console.log('Successfully added contact')
            console.log('------------')
            res.status(200).send({
              message: getStatus,
              response: status
            })
          })
          .catch((err) => {
            console.log('err', err.message)
            console.log('------------')
            res.status(400).send({
              message: 'Failed to add or update',
              error: err
            })
          });
      });
  }
}

module.exports = emailListController