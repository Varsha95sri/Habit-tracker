
import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const trackingSlice = createSlice({
  name: "tracking",
  initialState,
  reducers: {
    markHabit: (state, action) => {
      const { habitName, date, status } = action.payload;

      if (!state[habitName]) {
        state[habitName] = {};
      }

      state[habitName][date] = status; // status: 'done' or 'missed'
    },
  },
});

export const { markHabit } = trackingSlice.actions;
export default trackingSlice.reducer;
