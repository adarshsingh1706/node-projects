const express = require('express');
const {handleGenerationOfNewShortURL} = require('../controllers/url')
const router  = express.Router();

router.post('/',handleGenerationOfNewShortURL)

module.exports = router;
