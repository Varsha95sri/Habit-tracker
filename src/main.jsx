import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createRoutesFromElements, Route } from 'react-router'
import { createBrowserRouter } from 'react-router'
import AddHabits from './pages/AddHabits.jsx'
import YourHabits from './pages/YourHabits.jsx'
import ContactUs from './pages/ContactUs.jsx'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<AddHabits />} />
      <Route path='/your-habits' element={<YourHabits />} />
      <Route path='/contact-us' element={<ContactUs />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
