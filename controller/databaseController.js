'use strict'

const mysql = require('mysql')
const DBconfig = require('../db.js')

module.exports = mysql.createConnection(DBconfig)