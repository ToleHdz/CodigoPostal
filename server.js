'use strict'

const express = require('express')
const app = express()

//para la configuracion de los puertos
const config = require('./config.js')

app.use(config.tools)

app.listen(config.port, () => console.log('Encendido Onii - chan'))