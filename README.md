# Habit Tracker

A modern, responsive habit tracking application built with React.js and TailwindCSS. Track your daily habits, monitor your progress, and build lasting routines with a beautiful and intuitive interface.

## Features

### 🎯 Core Functionality
- **Add Custom Habits**: Create your own personalized habits
- **Suggested Habits**: Choose from 10 pre-defined habit suggestions
- **21-Day Tracking**: Track habits for 21 days to form lasting routines
- **Progress Visualization**: Beautiful circular progress indicators
- **Streak Tracking**: Monitor your current streak for each habit
- **Calendar View**: Interactive 21-day calendar with tick/cross functionality
- **Local Storage**: All data persists in your browser's local storage

### 📱 User Interface
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern UI**: Clean, modern interface with smooth animations
- **Carousel Layout**: Easy-to-navigate habit selection interface
- **Real-time Updates**: Instant feedback on habit completion
- **Color-coded Progress**: Visual indicators for different progress levels

### 🎨 Design Features
- **Gradient Backgrounds**: Beautiful gradient color schemes
- **Card-based Layout**: Clean, organized information display
- **Interactive Elements**: Hover effects and smooth transitions
- **Progress Indicators**: Circular progress charts with color coding
- **Responsive Grid**: Adaptive layout for different screen sizes

## Technology Stack

- **Frontend**: React.js 19
- **Styling**: TailwindCSS 4
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Package Manager**: npm

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Habit-Tracker/BetterBits
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Usage Guide

### Adding Habits

1. **Navigate to "Add Habits" page**
   - This is the default landing page

2. **Choose from suggestions**
   - Click on any of the 10 suggested habits
   - They will be automatically added to your habit list

3. **Create custom habits**
   - Use the input field to add your own habits
   - Click "Add Habit" to save

### Tracking Progress

1. **Go to "Your Habits" page**
   - View all your added habits in a carousel layout

2. **Select a habit**
   - Click on any habit to view detailed progress

3. **Mark daily progress**
   - Use the 21-day calendar to mark completed (✓) or missed (✗) days
   - Click on any day to toggle its status

4. **Monitor statistics**
   - View your current streak
   - See completion percentage
   - Track days completed vs. remaining

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Calender.jsx     # 21-day tracking calendar
│   ├── Footer.jsx       # Application footer
│   ├── InputHabit.jsx   # Custom habit input form
│   ├── Navbar.jsx       # Navigation bar
│   ├── ProgressPie.jsx  # Circular progress indicator
│   └── SuggestedHabits.jsx # Pre-defined habit suggestions
├── pages/               # Main application pages
│   ├── AddHabits.jsx    # Habit creation page
│   ├── ContactUs.jsx    # Contact information page
│   └── YourHabits.jsx   # Habit tracking page
├── store/               # Redux state management
│   ├── habitSlice.js    # Habit data and actions
│   └── store.js         # Redux store configuration
├── App.jsx              # Main application component
├── main.jsx             # Application entry point
└── index.css            # Global styles
```

## Data Persistence

All habit data is stored in the browser's local storage, which means:
- ✅ Data persists between browser sessions
- ✅ No account creation required
- ✅ Works offline
- ⚠️ Data is device-specific (not synced across devices)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you have any questions or need support, please contact us through the Contact Us page in the application.

---

**Happy Habit Building! 🚀**
