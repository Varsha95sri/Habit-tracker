
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: null,
};

const currentHabitSlice = createSlice({
  name: "currentHabit",
  initialState,
  reducers: {
    setCurrentHabit: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { setCurrentHabit } = currentHabitSlice.actions;
export default currentHabitSlice.reducer;
