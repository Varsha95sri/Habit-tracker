import React from 'react'
import InputHabit from '../components/InputHabit'
import SuggestedHabits from '../components/SuggestedHabits'

const AddHabits = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Build Better Habits
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start your journey to a better you by adding habits that matter. 
            Choose from our suggestions or create your own custom habits.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <InputHabit />
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                How it works
              </h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    1
                  </div>
                  <p>Add habits you want to build or choose from our suggestions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    2
                  </div>
                  <p>Track your progress daily for 21 days to form lasting habits</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    3
                  </div>
                  <p>Monitor your streaks and completion percentage</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <SuggestedHabits />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddHabits
