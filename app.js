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

const port = process.env.PORT || 3000; // Use the PORT environment variable if it's available, otherwise default to 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app; // Export your app for Vercel deployment
