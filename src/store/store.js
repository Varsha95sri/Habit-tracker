import { configureStore } from '@reduxjs/toolkit';
import habitSlice from './habitSlice';
import currentHabitSlice from './currentHabitSlice';
import trackingSlice from './trackingSlice';
import habitStatsSlice from './habitStatsSlice';

export const store = configureStore({
  reducer: {
    habits: habitSlice,
    currentHabit: currentHabitSlice,
    tracking: trackingSlice,
    habitStats: habitStatsSlice,
  },
});
