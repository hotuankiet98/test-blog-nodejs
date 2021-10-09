const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars');
const app = express()
//HTTP logger
app.use(morgan('combined'))
//Template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.get('/', function (req, res) {
  res.send(`<h1>Hello world</h1>`)
})
 
app.listen(8080)