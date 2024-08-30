import { configureStore } from '@reduxjs/toolkit'
import projectNavigationReducer from './projectNavigation/projectNavigation.js'

export default configureStore({
  reducer: {
    projectNavigation: projectNavigationReducer
  }
})