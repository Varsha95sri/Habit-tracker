import { configureStore } from '@reduxjs/toolkit';
import habitSlice from './habitSlice';

export const store = configureStore({
  reducer: {
    habits: habitSlice,
  },
});
