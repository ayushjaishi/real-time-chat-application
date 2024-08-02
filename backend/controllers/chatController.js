const ChatRoom = require('../models/ChatRoom');
const Message = require('../models/Message');

exports.createChatRoom = async (req, res) => {
    const { name, users } = req.body;

    try {
        const newChatRoom = new ChatRoom({ name, users });
        await newChatRoom.save();
        res.status(201).json(newChatRoom);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.getMessages = async (req, res) => {
    const { roomId } = req.params;

    try {
        const messages = await Message.find({ room: roomId }).populate('sender', 'name');
        res.json(messages);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};
