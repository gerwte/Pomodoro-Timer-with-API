const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(bodyParser.json());

app.get('/posts', cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a Single Route'})
});




// Import Routes
const postsRoute = require('./routes/posts');

app.get('/posts', postsRoute);

// ROUTES
app.get('/', (req, res) => {
    res.send('We are on home')
});

app.get('/posts', (req, res) => {
    res.send('We are on posts')
});

app.post('/posts', (req, res) => {
    res.send(request.body)
})

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, () => console.log('Connected to DB!'))

app.listen(3000);