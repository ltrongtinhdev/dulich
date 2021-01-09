const express = require('express');
const router = express.Router();

const {getAllPost, getPostById, insertPost,deletePost} = require('../controllers/PostControlller');

router.get('/', async(req, res, next) => {
    return res.status(200).json({
        code: 1
    })
});
router.get('/get-all',getAllPost)
router.post('/get-id',getPostById)
router.post('/insert',insertPost)
router.post('/delete',deletePost)
module.exports = router;
