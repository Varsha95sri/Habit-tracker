import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addHabit } from '../store/habitSlice'

const InputHabit = () => {
  const [habitName, setHabitName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName.trim()) {
      dispatch(addHabit(habitName.trim()));
      setHabitName('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Add Custom Habit
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            value={habitName}
            onChange={(e) => setHabitName(e.target.value)}
            placeholder="Enter your habit name..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            maxLength={50}
          />
        </div>
        <button
          type="submit"
          disabled={!habitName.trim()}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          Add Habit
        </button>
      </form>
    </div>
  )
}

export default InputHabit
