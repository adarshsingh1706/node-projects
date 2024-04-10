const express = require('express');
const {handleGenerationOfNewShortURL,handleGetAnalytics} = require('../controllers/url')
const router  = express.Router();

router.post('/',handleGenerationOfNewShortURL)

router.get('/analytics/:shortId',handleGetAnalytics)
module.exports = router;
