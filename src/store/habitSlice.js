
import { createSlice } from "@reduxjs/toolkit";

// Load habits from localStorage on initialization
const loadHabitsFromStorage = () => {
  try {
    const habits = localStorage.getItem('habits');
    return habits ? JSON.parse(habits) : [];
  } catch (error) {
    console.error('Error loading habits from localStorage:', error);
    return [];
  }
};

const initialState = {
  habitList: loadHabitsFromStorage(),
};

const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (state, action) => {
      const newHabit = {
        id: Date.now().toString(),
        name: action.payload,
        createdAt: new Date().toISOString(),
        tracking: {},
        streak: 0,
        totalDays: 0,
        completedDays: 0,
      };
      state.habitList.push(newHabit);
      // Save to localStorage
      localStorage.setItem('habits', JSON.stringify(state.habitList));
    },
    removeHabit: (state, action) => {
      const habitId = action.payload;
      state.habitList = state.habitList.filter(h => h.id !== habitId);
      // Save to localStorage
      localStorage.setItem('habits', JSON.stringify(state.habitList));
    },
    updateHabitTracking: (state, action) => {
      const { habitId, date, completed } = action.payload;
      const habit = state.habitList.find(h => h.id === habitId);
      if (habit) {
        if (completed === undefined) {
          // Remove the date from tracking if it's undefined
          delete habit.tracking[date];
        } else {
          // Set the tracking value
          habit.tracking[date] = completed;
        }
        
        // Calculate stats
        const dates = Object.keys(habit.tracking);
        habit.completedDays = dates.filter(date => habit.tracking[date] === true).length;
        habit.totalDays = dates.length;
        
        // Calculate streak
        let currentStreak = 0;
        const sortedDates = dates.sort().reverse();
        for (const date of sortedDates) {
          if (habit.tracking[date] === true) {
            currentStreak++;
          } else {
            break;
          }
        }
        habit.streak = currentStreak;
        
        // Save to localStorage
        localStorage.setItem('habits', JSON.stringify(state.habitList));
      }
    },
  },
});

export const { addHabit, removeHabit, updateHabitTracking } = habitSlice.actions;
export default habitSlice.reducer;
