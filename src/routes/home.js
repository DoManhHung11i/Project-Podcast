const express = require('express');
const router = express.Router();
const homeController = require('../app/controllers/homeController');
const login_signupController = require('../app/controllers/login-signupController');

router.post('/loginUser', login_signupController.loginUser);
router.post('/registerUser', login_signupController.registerUser);
router.get('/Signup', login_signupController.Signup);
router.get('/Login', login_signupController.Login);
router.get('/Recently', homeController.Recently);
router.get('/MyQueue', homeController.MyQueue);
router.get('/MyPodcast', homeController.MyPodcast);
router.get('/Discovery', homeController.discovery);
router.get('/', homeController.home);

module.exports = router