const router = require('express').Router();
const Workout = require('../../models/workout');

router.get('/workouts', async ({ body }, res) => {
    await db.getLastInsertedDocument.find({}).sort({ _id: -1 }).limit(1)
});

// router.post('/workouts', async ({ body }, res) => {

// })

// router.post()

module.exports = router;