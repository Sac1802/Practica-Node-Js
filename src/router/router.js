const { Router } = require('express');
const userController = require('../controllers/userController')
const dataControllers = require('../controllers/dataControllers')

let router = Router();

//User
router.post('/user/save', userController.saveUser);

//Data
router.post('/save/data', dataControllers.saveData);
router.get('/list/data/:search?', dataControllers.enlistData);

module.exports = router;