'use strict'

const express = require('express')
const JSONParser = require('body-parser')
const app = express()
const views = require('./routes/views.js')
const postal = require('./routes/postal.js')

app.set('view engine', 'jade')
app.use(views)

app.use(express.static('public'))
app.use(JSONParser.urlencoded({extended: false}))
app.use(JSONParser.json())

app.use(postal)

module.exports = app