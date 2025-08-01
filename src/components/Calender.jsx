import React from 'react'
import { useDispatch } from 'react-redux'
import { updateHabitTracking } from '../store/habitSlice'

const Calender = ({ habitId, tracking }) => {
  const dispatch = useDispatch();

  // Generate last 21 days
  const generateLast21Days = () => {
    const days = [];
    const today = new Date();
    
    for (let i = 20; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      days.push(date.toISOString().split('T')[0]);
    }
    
    return days;
  };

  const days = generateLast21Days();

  const handleDayClick = (date) => {
    const currentStatus = tracking[date];
    let newStatus;
    
    // Cycle through: undefined -> true -> false -> undefined
    if (currentStatus === undefined) {
      newStatus = true; // Mark as completed
    } else if (currentStatus === true) {
      newStatus = false; // Mark as missed
    } else {
      newStatus = undefined; // Reset to not tracked
    }
    
    dispatch(updateHabitTracking({ habitId, date, completed: newStatus }));
  };

  const getDayStatus = (date) => {
    return tracking[date];
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Last 21 Days Tracking
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        Click on any day to cycle through: Not tracked → Completed → Missed → Not tracked
      </p>
      <div className="grid grid-cols-7 gap-2">
        {days.map((date, index) => {
          const status = getDayStatus(date);
          const isToday = date === new Date().toISOString().split('T')[0];
          
          return (
            <div key={index} className="text-center">
              <div className="text-xs text-gray-500 mb-1">
                {formatDate(date)}
              </div>
              <button
                onClick={() => handleDayClick(date)}
                className={`w-8 h-8 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
                  status === true
                    ? 'bg-green-500 border-green-500 text-white shadow-md'
                    : status === false
                    ? 'bg-red-500 border-red-500 text-white shadow-md'
                    : 'bg-gray-100 border-gray-300 hover:bg-gray-200 hover:border-gray-400'
                } ${isToday ? 'ring-2 ring-blue-400' : ''}`}
                title={`${formatDate(date)} - Click to mark`}
              >
                {status === true ? '✓' : status === false ? '✗' : ''}
              </button>
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex justify-center space-x-6 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          <span>Completed</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
          <span>Missed</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gray-100 border border-gray-300 rounded-full"></div>
          <span>Not tracked</span>
        </div>
      </div>
    </div>
  )
}

export default Calender
