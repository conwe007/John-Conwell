const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// routes
app.use('/', require('./routes/routes'));

// static path
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}...`);
});