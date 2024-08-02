import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: { chatRooms: [], messages: {} },
  reducers: {
    setChatRooms: (state, action) => {
      state.chatRooms = action.payload;
    },
    addMessage: (state, action) => {
      const { roomId, message } = action.payload;
      if (!state.messages[roomId]) {
        state.messages[roomId] = [];
      }
      state.messages[roomId].push(message);
    },
  },
});

export const { setChatRooms, addMessage } = chatSlice.actions;
export default chatSlice.reducer;
