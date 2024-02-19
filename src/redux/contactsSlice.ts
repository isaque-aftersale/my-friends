import { createSlice } from '@reduxjs/toolkit';

import { User } from './userSlice';

export namespace Contacts {
  export type State = {
    list: User.State[];
  };
}

const initialState: Contacts.State = {
  list: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    saveContact(state, { payload }) {
      state.list.push({
        id: payload.id,
        name: payload.name,
        connected: payload.connected,
      });
    },
    deleteAll(state) {
      state.list = [];
    },

    delete(state, { payload }) {
      for (let i = 0; i < state.list.length; i++) {
        if (state.list[i]?.id === payload.id) {
          delete state.list[i];
          break;
        }
      }
    },
  },
});

export const contactsAction = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const contactsInitialState = initialState;
