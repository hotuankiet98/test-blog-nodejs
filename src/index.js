const express = require('express')
const path = require('path')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const app = express()
const port=8080

const route= require('./routes')
//HTTP logger
app.use(morgan('combined'))
//Template engine
app.engine('hbs', exphbs({
    extname:'.hbs'
}))
//static file
app.use(express.static(path.join(__dirname,'public')))
//Tao middleware de lay du lieu POST method
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())

app.set('view engine','hbs')

app.set('views', path.join(__dirname, 'resources/views'))

//route init
route(app)

app.listen(port,()=>console.log(`Example app listening at http://localhost:${port}`))