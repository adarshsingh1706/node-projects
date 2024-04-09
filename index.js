const express = require('express');
const app = express();
const PORT = 8001;
const urlRoute = require('./routes/url');
const {connectMongoDB} = require("./connect")



connectMongoDB("mongodb://127.0.0.1:27017/short-url").then(()=>console.log("MongoDB Connected"))
app.use("/url", urlRoute)

app.listen(PORT,()=> console.log(`SERVER RUNNING AT PORT : ${PORT}`));