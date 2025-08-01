import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeHabit } from '../store/habitSlice'
import ProgressPie from '../components/ProgressPie'
import Calender from '../components/Calender'

const YourHabits = () => {
  const habits = useSelector(state => state.habits.habitList);
  const dispatch = useDispatch();
  const [selectedHabit, setSelectedHabit] = useState(null);

  const handleHabitClick = (habit) => {
    setSelectedHabit(habit);
  };

  const handleRemoveHabit = (habitId) => {
    dispatch(removeHabit(habitId));
    if (selectedHabit && selectedHabit.id === habitId) {
      setSelectedHabit(null);
    }
  };

  const calculatePercentage = (habit) => {
    if (habit.totalDays === 0) return 0;
    return (habit.completedDays / 21) * 100;
  };

  if (habits.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-lg shadow-md p-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              No Habits Yet
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Start by adding some habits to track your progress!
            </p>
            <a
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Add Your First Habit
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Your Habits
          </h1>
          <p className="text-lg text-gray-600">
            Track your progress and build lasting habits
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Habit Carousel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Your Habit List
              </h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {habits.map((habit) => {
                  const percentage = calculatePercentage(habit);
                  return (
                    <div
                      key={habit.id}
                      onClick={() => handleHabitClick(habit)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                        selectedHabit?.id === habit.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800">
                            {habit.name}
                          </h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                            <span>Streak: {habit.streak} days</span>
                            <span>Completed: {habit.completedDays}/21</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-12 h-12">
                            <ProgressPie percentage={percentage} size={48} />
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRemoveHabit(habit.id);
                            }}
                            className="text-red-500 hover:text-red-700 p-1"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Habit Details */}
          <div className="lg:col-span-2">
            {selectedHabit ? (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">
                      {selectedHabit.name}
                    </h2>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-blue-600">
                        {selectedHabit.streak}
                      </div>
                      <div className="text-sm text-gray-500">Day Streak</div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">
                        {selectedHabit.completedDays}
                      </div>
                      <div className="text-sm text-gray-600">Days Completed</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">
                        {Math.round(calculatePercentage(selectedHabit))}%
                      </div>
                      <div className="text-sm text-gray-600">Progress</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">
                        {21 - selectedHabit.completedDays}
                      </div>
                      <div className="text-sm text-gray-600">Days Left</div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ProgressPie percentage={calculatePercentage(selectedHabit)} size={150} />
                  </div>
                </div>

                <Calender habitId={selectedHabit.id} tracking={selectedHabit.tracking} />
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Select a Habit
                </h3>
                <p className="text-gray-600">
                  Click on any habit from the list to view its details and track your progress.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default YourHabits
