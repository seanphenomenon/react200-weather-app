require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/weather/:city', (req, res) => {
    city = req.params.city;
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=410463b3935acea56c8171825dbb4440&units=imperial`)
            .then(response => res.send(response.data))
            .catch(err => console.log(err));
});

module.exports = app;
