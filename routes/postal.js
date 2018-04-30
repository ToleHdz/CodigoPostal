'use strict'

const express = require('express')
const app = express()

const postalController = require('../controller/postalController.js') 

app.route('/postal/:id')
.get((request, response) => 
{
    postalController(request.params.id, (error, result) => 
    {
        if (error) throw error;
        response.json(result);
    })
})

module.exports = app