// ChatRoom.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('/api/chat/messages');
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div>
      <h2>Chat Room</h2>
      <ul>
        {messages.length > 0 ? (
          messages.map((message) => <li key={message.id}>{message.text}</li>)
        ) : (
          <p>No messages available.</p>
        )}
      </ul>
    </div>
  );
};

export default ChatRoom;
