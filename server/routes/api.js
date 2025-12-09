const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.get('/profile', dataController.getProfile);
router.get('/blog', dataController.getBlogPosts);
router.get('/projects', dataController.getProjects);

module.exports = router;
