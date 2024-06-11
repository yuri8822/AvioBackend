const express = require('express');
const router = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI); // Use environment variable for connection string
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB Successfully');
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', router);

// No need to specify a port when deploying on Vercel

module.exports = app; // Export your app for Vercel deployment
