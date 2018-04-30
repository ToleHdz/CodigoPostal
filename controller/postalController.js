'use strict'

const conexion = require('./databaseController.js')

function getPostal(id, callback) 
{
    return conexion.query('select * from CodigosPostales where CodigoPostal = ?', [id] ,callback)
}

module.exports = getPostal