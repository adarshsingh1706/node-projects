const {nanoid} = require('shortid')
const URL = require('../models/url')

async function handleGenerationOfNewShortURL(req,res){
const body = req.body;
if(!body.url) return res.status(400).json({error:"URL is required"})
const shortID = shortid() //nanoid of 8 characters

await URL.create({
  shortId: shortID,
  redirectURL:body.url,
  visitHistory: [],

})
return res.json({id:shortID})
}

module.exports ={
  handleGenerationOfNewShortURL 
}