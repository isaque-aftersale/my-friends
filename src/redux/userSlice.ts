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
    connect(state, data) {
      state.id = data.payload.id;
      state.connected = data.payload.connected;
    },
    disconnect(state) {
      state = initialState;
    },
  },
});

export const userAction = userSlice.actions;

export const userReducer = userSlice.reducer;
