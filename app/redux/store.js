import { configureStore } from '@reduxjs/toolkit'
import projectNavigationReducer from './projectNavigation/projectNavigation.js'
import darkModeToggleReducer from './darkModeToggle/darkModeToggle.js'

export default configureStore({
  reducer: {
    projectNavigation: projectNavigationReducer,
    darkModeToggle: darkModeToggleReducer
  }
})