import { configureStore } from '@reduxjs/toolkit';

import { Chat, chatReducer } from './chatSlice';
import { contactReducer, Contacts } from './contactsSlice';
import { User, userReducer } from './userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
    contacts: contactReducer,
  },
});

export type RootState = {
  user: User.State;
  chat: Chat.State;
  contacts: Contacts.State;
};

export default store;
