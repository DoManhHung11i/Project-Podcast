const express = require('express');
const router = express.Router();
const homeController = require('../app/controllers/homeController');


router.get('/Signup', homeController.Signup);
router.get('/Login', homeController.Login);
router.get('/Recently', homeController.Recently);
router.get('/MyQueue', homeController.MyQueue);
router.get('/MyPodcast', homeController.MyPodcast);
router.get('/Discovery', homeController.discovery);
router.get('/', homeController.home);

module.exports = router