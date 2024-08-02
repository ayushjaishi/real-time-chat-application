const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    url: { type: String, required: true },
    publishedAt: { type: Date },
});

module.exports = mongoose.model('Article', ArticleSchema);
