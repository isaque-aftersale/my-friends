import { createSlice } from '@reduxjs/toolkit';

import { User, userInitialState } from './userSlice';

export namespace Chat {
  export type DataFormat = "text" | "img" | "html";

  export type Message = {
    data_format: DataFormat;
    value: unknown;
  };

  export type State = {
    from: User.State;
    to: User.State;
    messages: Chat.Message[];
  };
}

const initialState: Chat.State = {
  from: userInitialState,
  to: userInitialState,
  messages: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    initializeChat(state, { type, payload }) {
      state.from = payload.from;
      state.to = payload.to;
    },
  },
});

export const chatAction = chatSlice.actions;
export const chatReducer = chatSlice.reducer;
export const chatInitialState = initialState;
