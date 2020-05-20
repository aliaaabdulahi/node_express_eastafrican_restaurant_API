const Restaurant = require('../models/Restaurant')

// @desc    Get all restaurants
// @route   GET /api/v1/restaurants
// @access  Public (do you need to be authenticated?)
exports.getRestaurants = async (req, res, next) => {
    try{
        const restaurants = await Restaurant.find();
        res.status(200).json({ success: true, count: restaurants.length, data: restaurants })
    } catch (err) {
        res.status(400).json({ success: false })
    }
};

// @desc    Get restaurant by id
// @route   GET /api/v1/restaurants/:id
// @access  Public (do you need to be authenticated?)
exports.getRestaurant = async (req, res, next) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id)
        if (!restaurant) {
            return res.status(400).json({ success: false });
         }
         res.status(200).json({ success: true, data: restaurant })
    } catch (err) {
        res.status(400).json({ success: false });
    }
};

// @desc    Post/create new restaurant
// @route   POST /api/v1/restaurants
// @access  Private (do you need to be authenticated?)
exports.createRestaurant = async (req, res, next) => {
    try {
        const restaurant = await Restaurant.create(req.body);

        res.status(201).json({
            success: true,
            data: restaurant
        });
    } catch (err) {
        res.status(400).json( { success: false, message: err.message});
    }
};

// @desc    Update restaurant by id
// @route   PUT /api/v1/restaurants/:id
// @access  Private (do you need to be authenticated?)
exports.updateRestaurant = async (req, res, next) => {
   try {
    const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
        runValidators:true
    });

    if (!restaurant) {
        return res.status(400).json({ success:false });
    }

    res.status(200).json( { success: true, data: restaurant });
   } catch (err) {
        res.status(400).json( { success: false, message: err.message});
   }
};

// @desc    Delete restaurant by id
// @route   DELETE /api/v1/restaurants/:id
// @access  Private (do you need to be authenticated?)
exports.deleteRestaurant = async (req, res, next) => {
    try {
        const restaurant = await Restaurant.findByIdAndDelete(req.params.id);

        if (!restaurant) {
            return res.status(400).json({ success:false });
        }

        res.status(200).json( { success: true, data: {} });

       } catch (err) {
            res.status(400).json( { success: false });
       }
};

