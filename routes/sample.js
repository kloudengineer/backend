const express = require("express");
const router = express.Router();

const {
  listSample
} = require('../controllers/sample');

router.get('/sample', listSample);

module.exports = router;