const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('../routes/userRoutes');

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/users', userRoutes);

module.exports = app;