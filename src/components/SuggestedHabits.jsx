import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addHabit } from '../store/habitSlice'

const SuggestedHabits = () => {
  const dispatch = useDispatch();
  const userHabits = useSelector(state => state.habits.habitList);
  
  const suggestedHabits = [
    'Running', 'Writing', 'Exercising', 'Meditation', 
    'Cycling', 'Badminton', 'Reading', 'Karate', 
    'Painting', 'Coding'
  ];

  const handleAddHabit = (habitName) => {
    // Check if habit already exists
    const exists = userHabits.some(habit => 
      habit.name.toLowerCase() === habitName.toLowerCase()
    );
    
    if (!exists) {
      dispatch(addHabit(habitName));
    }
  };

  const isHabitAdded = (habitName) => {
    return userHabits.some(habit => 
      habit.name.toLowerCase() === habitName.toLowerCase()
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Suggested Habits
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {suggestedHabits.map((habit, index) => (
          <button
            key={index}
            onClick={() => handleAddHabit(habit)}
            disabled={isHabitAdded(habit)}
            className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
              isHabitAdded(habit)
                ? 'bg-green-100 text-green-700 cursor-not-allowed'
                : 'bg-blue-50 text-blue-700 hover:bg-blue-100 hover:scale-105'
            }`}
          >
            {habit}
            {isHabitAdded(habit) && (
              <span className="ml-1">✓</span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SuggestedHabits
