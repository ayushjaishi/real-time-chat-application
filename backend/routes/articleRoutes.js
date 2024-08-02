const express = require('express');
const { saveArticle, getSavedArticles } = require('../controllers/articleController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/save', authMiddleware, saveArticle);
router.get('/saved', authMiddleware, getSavedArticles);

module.exports = router;
