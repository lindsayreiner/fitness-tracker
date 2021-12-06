require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness_tracker", {
    useNewUrlParser: true
});

app.use(routes);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
})