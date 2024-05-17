import { combineReducers, configureStore } from '@reduxjs/toolkit';
import navigationReducer from './layout/navgationSlice';
import authReducer from './layout/authSlice';
import { APIs } from './APIs';

export const store = configureStore({
  reducer: combineReducers({
    [APIs.reducerPath]: APIs.reducer,
    navigation: navigationReducer,
    auth: authReducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(APIs.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;