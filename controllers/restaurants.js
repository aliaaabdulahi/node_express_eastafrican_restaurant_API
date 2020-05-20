const Restaurant = require('../models/Restaurant')

// @desc    Get all restaurants
// @route   GET /api/v1/restaurants
// @access  Public (do you need to be authenticated?)
exports.getRestaurants = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show all restaurants' })
}

// @desc    Get restaurant by id
// @route   GET /api/v1/restaurants/:id
// @access  Public (do you need to be authenticated?)
exports.getRestaurant = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Show restaurant ${req.params.id}` })
}

// @desc    Post/create new restaurant
// @route   POST /api/v1/restaurants
// @access  Private (do you need to be authenticated?)
exports.createRestaurant = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Create new restaurant' })
}

// @desc    Update restaurant by id
// @route   PUT /api/v1/restaurants/:id
// @access  Private (do you need to be authenticated?)
exports.updateRestaurant = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update restaurant ${req.params.id}` })
}

// @desc    Delete restaurant by id
// @route   DELETE /api/v1/restaurants/:id
// @access  Private (do you need to be authenticated?)
exports.deleteRestaurant = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete restaurant ${req.params.id}` })
}

