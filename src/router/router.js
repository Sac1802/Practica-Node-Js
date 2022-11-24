const { Router } = require('express');
const userController = require('../controllers/userController');
const dataControllers = require('../controllers/dataControllers');
const authControllers = require('../controllers/authControllers');

let router = Router();

//User
router.post('/user/save', userController.saveUser);
router.delete('/user/delete', userController.deleteUser);

//Data
router.post('/save/data',authControllers.verifyToken ,dataControllers.saveData);
router.get('/list/data/:search?', dataControllers.enlistData);
router.put('/update/data/:id', dataControllers.updateData);
router.delete('/delete/data/:id', authControllers.verifyToken, dataControllers.deleteData);

//Auth
router.post('/login', authControllers.login);

module.exports = router;