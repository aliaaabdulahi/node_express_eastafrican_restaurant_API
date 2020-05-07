const express = require('express');
const router = express.Router();

//get all restaurants
router.get('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Show all restaurants' })
});

//get restaurant by id
router.get('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Show restaurant ${req.params.id}` })
});

//post new restaurant
router.post('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Create new restaurant' })
});

//update restaurant by id
// put is for updating and you're gonna need an id
// the way you access the parameters is by using req.params.nameOfParam 
router.put('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Update restaurant ${req.params.id}` })
});

//delete the restaurant by id
router.delete('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Delete restaurant ${req.params.id}` })
});

module.exports = router;