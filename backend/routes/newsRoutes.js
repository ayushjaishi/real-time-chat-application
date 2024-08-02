const express = require('express');
const { getArticles, saveArticle } = require('../controllers/newsController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Route to fetch news articles with pagination
router.get('/articles', getArticles);

// Route to save an article to the user's profile
router.post('/save', authMiddleware, saveArticle);

module.exports = router;
