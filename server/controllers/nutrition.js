const nutritionController = {}

nutritionController.sendStats = (req, res) => {
  res.status(200).send({
    message: 'Success'
  })
}

module.exports = nutritionController