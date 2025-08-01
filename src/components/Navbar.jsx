import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition-colors">
            Habit Tracker
          </Link>
          <div className="flex space-x-6">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'bg-white text-blue-600' 
                  : 'text-white hover:bg-blue-700'
              }`}
            >
              Add Habits
            </Link>
            <Link 
              to="/your-habits" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/your-habits' 
                  ? 'bg-white text-blue-600' 
                  : 'text-white hover:bg-blue-700'
              }`}
            >
              Your Habits
            </Link>
            <Link 
              to="/contact-us" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/contact-us' 
                  ? 'bg-white text-blue-600' 
                  : 'text-white hover:bg-blue-700'
              }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
