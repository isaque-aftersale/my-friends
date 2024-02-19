import { configureStore } from '@reduxjs/toolkit';

import { Chat, chatReducer } from './chatSlice';
import { User, userReducer } from './userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
  },
});

export type RootState = {
  user: User.State;
  chat: Chat.State;
};

export default store;
