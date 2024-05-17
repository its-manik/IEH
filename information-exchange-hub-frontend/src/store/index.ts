import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './layout/navgationSlice';
import authReducer from './layout/authSlice';

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;