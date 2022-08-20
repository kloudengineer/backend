const Sample = require('../models/Sample');

exports.listSample = async (req, res) => {
  await Sample.find()
    .then((staff) => res.json({ staff: staff }))
    .catch((error) => res.status(500).send(error.message))
}