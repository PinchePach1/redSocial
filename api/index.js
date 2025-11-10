const express = require('express');
const bodyParser = require('body-parser');

const swaggerUI = require('swagger-ui-express');

const config = require('../config.js');
const user = require('../api/components/user/network.js');

const app = express();

app.use(bodyParser.json());

const swaggerDoc = require('./swagger.json');

//ROUTES
app.use('/api/user',  user);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.listen(config.api.port, () => {
    console.log(`API escuchando en el puerto: `, config.api.port);
})