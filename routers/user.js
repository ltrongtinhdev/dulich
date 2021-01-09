const express = require('express');
const router = express.Router();

const {login, register} = require('../controllers/UserController');

router.get('/', async(req, res, next) => {
    return res.status(200).json({
        code: 1
    })
});
router.post('/login',login)
router.post('/register',register)
module.exports = router;
