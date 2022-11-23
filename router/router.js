const express = require('express')
const router = express.Router();
const controller = require('../controller/controller');
// const manager = require('../manager/manager');

// router.post('/signupuser',controller.signupuser)
// router.post('/login',controller.login)
// router.get('/getuser/:id',controller.getuser)
// router.get('/getAllUser',controller.getAllUser)
// router.delete('/deleteuser/:id',controller.deleteuser)
// router.patch('/updateUser/:id',controller.updateUser)


router.post('/webcam', controller.webcam)
router.get('/getwebcam', controller.getwebcam);

module.exports = router