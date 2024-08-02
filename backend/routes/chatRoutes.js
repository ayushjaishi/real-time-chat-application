const express = require('express');
const { createChatRoom, getMessages } = require('../controllers/chatController');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/create', authMiddleware, createChatRoom);
router.get('/messages/:roomId', authMiddleware, getMessages);

module.exports = router;
