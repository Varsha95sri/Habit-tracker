
import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const habitStatsSlice = createSlice({
  name: "habitStats",
  initialState,
  reducers: {
    updateStats: (state, action) => {
      const { habitName, status } = action.payload;

      if (!state[habitName]) {
        state[habitName] = {
          activeDays: 0,
          leftDays: 21,
          streak: 0,
        };
      }

      const habit = state[habitName];

      if (status === "done") {
        
        if (habit.leftDays > 0) {
          habit.activeDays += 1;
          habit.leftDays = Math.max(21 - habit.activeDays, 0);
        }
        habit.streak += 1;
      } else if (status === "missed") {
        habit.streak = 0;
      }
    },
  },
});

export const { updateStats } = habitStatsSlice.actions;
export default habitStatsSlice.reducer;
