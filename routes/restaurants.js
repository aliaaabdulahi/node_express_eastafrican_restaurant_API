const express = require('express');

const { getRestaurants, getRestaurant, createRestaurant, updateRestaurant, deleteRestaurant } = require('../controllers/restaurants');

const router = express.Router();

//class used to create modular, mountable route handlers. complete middleware and routing system

router.route('/').get(getRestaurants).post(createRestaurant);

router.route('/:id').get(getRestaurant).put(updateRestaurant).delete(deleteRestaurant)

module.exports = router;
