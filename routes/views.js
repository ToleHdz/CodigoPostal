'use strict'

const express = require('express')
const app = express()

app.route('/')
.get((request, response) => response.render('index'))

module.exports = app