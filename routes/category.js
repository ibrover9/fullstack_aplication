const express = require('express');
const passport = require('passport')
const upload= require('../middleware/upload')
// const { request, response } = require('../app');
const controller = require('../controllers/category');
const router = express.Router();


router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll)

router.get('/:id', controller.getById)

router.delete('/:id', controller.remove)

router.post('/', upload.single('image'), controller.create)

router.patch('/:id', upload.single('image'), controller.update)


module.exports = router;