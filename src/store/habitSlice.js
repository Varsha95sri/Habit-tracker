
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  habitList: [],
};

const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (state, action) => {
      const habit = action.payload;
      if (!state.habitList.includes(habit)) {
        state.habitList.push(habit);
      }
    },
    removeHabit: (state, action) => {
      const habit = action.payload;
      state.habitList = state.habitList.filter(h => h !== habit);
    },
  },
});

export const { addHabit, removeHabit } = habitSlice.actions;
export default habitSlice.reducer;
