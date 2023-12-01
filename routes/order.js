const express = require('express');
// const { request, response } = require('../app');
const controller = require('../controllers/order');
const router = express.Router();


router.get('/', controller.getAll)

router.post('/', controller.create)




module.exports = router;