'use strict';

var express = require('express');
var indexCtrl = require('../index');
var routers = express.Router();

routers.post('/mutant', indexCtrl.esMutante);

module.exports = routers;