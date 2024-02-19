import { createSlice } from '@reduxjs/toolkit';

import { User } from './userSlice';

export namespace Contacts {
  export type State = User.State[];
}

const initialState: Contacts.State = [];

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    saveContact(state, { payload }) {
      state.push({
        id: payload.id,
        name: payload.name,
        connected: payload.connected,
      });
    },
  },
});

export const contactAction = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
export const contactInitialState = initialState;
