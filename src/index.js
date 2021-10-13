const express = require('express')
const path = require('path')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const app = express()
//HTTP logger
app.use(morgan('combined'))
//Template engine
app.engine('hbs', exphbs({
    extname:'.hbs'
}))
app.use(express.static(path.join(__dirname,'public')))

app.set('view engine','hbs')

app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', function (req, res) {
    res.render('home')

})

app.listen(8080)