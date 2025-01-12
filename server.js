// Load environment variables from .env file if not in production
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// Importing express library
const express = require('express');
const app = express();
const expresslayouts = require('express-ejs-layouts');

const indexRouter = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');

app.use(expresslayouts);
app.use(express.static('public'));

// Setting up the database (importing mongoose from the downloaded mongoose library)
const mongoose = require('mongoose');

// Connecting the database
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to mongoose.'));

app.use('/', indexRouter);

app.listen(process.env.PORT || 3000);
