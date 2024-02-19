import { createSlice } from '@reduxjs/toolkit';

export namespace User {
  export type State = {
    id: string;
    connected: boolean;
    name: string;
  };

  export enum Action {
    LOGIN = "login",
  }
}

const initialState: User.State = {
  id: "",
  name: "",
  connected: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    connect(state, { payload }) {
      state.id = payload.id;
      state.name = payload.name;
      state.connected = payload.connected;
    },
    disconnect(state) {
      state.id = "";
      state.name = "";
      state.connected = false;
    },
  },
});

export const userAction = userSlice.actions;

export const userReducer = userSlice.reducer;

export const userInitialState = initialState;
