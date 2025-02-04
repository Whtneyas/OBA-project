const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

// in /api/example
router
    .route('/example/')
    .get(apiController.getExample)
    .post(apiController.postExample)


// router.post('/favorite', apiController.addToFavorites)



// .post(object.function-in-the-object)
router.route('/search/').post(apiController.search);
router.route('/details/').get(apiController.getDetails);
router.route('/favorite/').post(apiController.addToFavorites)


module.exports = router;