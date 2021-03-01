'use strict';

/**
 * Clase configuración servidor
 */
const config = require('./config');
const appCtrl = require('./app');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes');

const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: 1024102420, type: 'application/json' }));
app.use('/api', apiRoutes);

app.listen(config.PORT, () => { console.log(`Server listening on port: ${config.PORT}`) });
