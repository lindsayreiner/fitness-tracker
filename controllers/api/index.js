const router = require('express').Router();

const workoutRoutes = require('./workoutRoutes.js');
const exerciseRoutes = require('./exerciseRoutes.js');

router.use('/workouts', workoutRoutes);
// router.use('/exercise', exerciseRoutes);

module.exports = router;