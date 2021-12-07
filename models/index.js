const mongojs = require('monogojs');

const databaseUrl = "exercise";
const collections = ['workouts']

const db = mongojs(databaseUrl, collections);

db.on('error', error => {
    console.log(`Database error: ${error}`);
});

