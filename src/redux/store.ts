import { configureStore } from '@reduxjs/toolkit';

import { User, userReducer } from './userSlice';

export type RootState = {
  user: User.State;
};

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
