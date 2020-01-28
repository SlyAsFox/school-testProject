const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');

router.get('/', asyncHandler(async (req, res) => {
    res.send({
        req: 'GET teachers'
    })
}));

module.exports = router;
