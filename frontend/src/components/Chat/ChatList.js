import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setChatRooms } from '../../store/reducers/chatReducer';

const ChatList = () => {
  const chatRooms = useSelector((state) => state.chat.chatRooms);
  const dispatch = useDispatch();

  // Example to set chat rooms
  const loadChatRooms = () => {
    dispatch(setChatRooms([{ id: 1, name: 'General' }, { id: 2, name: 'Random' }]));
  };

  return (
    <div>
      <h2>Chat Rooms</h2>
      <button onClick={loadChatRooms}>Load Chat Rooms</button>
      <ul>
        {chatRooms.map((room) => (
          <li key={room.id}>{room.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
