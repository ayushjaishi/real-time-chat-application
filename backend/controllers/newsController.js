const axios = require('axios');
const Article = require('../models/Article');

const API_KEY = '4d2ab94760354bb39521841bc926e837';
const BASE_URL = 'https://newsapi.org/v2';

exports.getArticles = async (req, res) => {
    const { page = 1, pageSize = 10 } = req.query;

    try {
        const response = await axios.get(`${BASE_URL}/top-headlines`, {
            params: {
                apiKey: API_KEY,
                page,
                pageSize,
            },
        });

        res.json(response.data);
    } catch (err) {
        res.status(500).json({ msg: 'Failed to fetch articles' });
    }
};

exports.saveArticle = async (req, res) => {
    const { title, description, url, publishedAt } = req.body;

    try {
        const article = new Article({ title, description, url, publishedAt });
        await article.save();
        res.status(201).json(article);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};
