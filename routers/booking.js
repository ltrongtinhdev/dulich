const express = require('express');
const router = express.Router();

const {getAllBooking, getBookingById, updateStatusBooking, insertBooking} = require('../controllers/BookingController');

router.get('/', async(req, res) => {
    return res.status(200).json({
        code: 1
    })
});
router.get('/get-all',getAllBooking)
router.post('/get-id',getBookingById)
router.post('/insert',insertBooking)
router.post('/update',updateStatusBooking)
module.exports = router;
