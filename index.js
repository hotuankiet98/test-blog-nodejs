const express = require('express')
const morgan=require('morgan')
const app = express()
app.use(morgan('combined'))
app.get('/', function (req, res) {
  res.send(`<h1>Hello world</h1>`)
})
 
app.listen(8080)