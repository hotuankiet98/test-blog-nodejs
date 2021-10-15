const express = require('express')
const path = require('path')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const app = express()
const port=8080
//HTTP logger
app.use(morgan('combined'))
//Template engine
app.engine('hbs', exphbs({
    extname:'.hbs'
}))
//static file
app.use(express.static(path.join(__dirname,'public')))

app.set('view engine','hbs')

app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', function (req, res) {
    res.render('home')

})
app.get('/news', function (req, res) {
    res.render('news')

})
app.listen(port,()=>console.log(`Example app listening at http://localhost:${port}`))