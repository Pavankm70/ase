const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

router.get('/', recipeController.homepage);
router.get('/about', recipeController.aboutus);
router.get('/club', recipeController.clubmem);

router.get('/login', recipeController.log)
router.get('/signup', recipeController.sign)

module.exports = router;