const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [150, 'Name cannot be more than 150 characters']
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [500, 'Name cannot be more than 500 characters']
    },
    website: {
        type: String,
        match: [
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
            'Pleae enter valid URL with HTTP or HTTPS'
          ]
    },
    phone: {
        type: String,
        maxlength: [20, 'Phone number can not be longer than 20 characters']
    },
    address: {
        type: String,
        required: [true, 'Please add an address']
    },
    location: {
        //GeoJSON point
        type: {
            type: String,
            enum: ['Point'],
            required: false
          },
        coordinates: {
            type: [Number],
            required: false,
            index: '2dsphere'
          },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zipCode: String,
        country: String
    },
    ethnicity: {
        type: [String],
        required: true,
        enum: [
            'Eritrean', 
            'Ethiopian', 
            'Somali', 
            'East African Fusion',
        ]
    },
    spotType:{
        type: String,
        required: true,
        enum: [
            'Restaurant',
            'Restaurant/Shisha Spot',
            'Restaurant/Mom & Pop Shop'
        ]
    },
    averageRating: {
        type: Number,
        min: [1, 'Rating must be at least 1'],
        max: [10, 'Rating cannot be more than 10']
    },
    averageCost: Number,
    photo: {
        type: String,
        default: 'no-photo.jpg'
    },
    mealCourses:  {
        type: [String],
        required: true
    },
    dineIn: {
        type: Boolean,
        default: false
    },
    takeout: {
        type: Boolean,
        default: false
    },
    delivery: {
        type: Boolean,
        default: false
    },
    acceptCredit: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Restaurant', RestaurantSchema)