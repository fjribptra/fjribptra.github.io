import { createSlice } from '@reduxjs/toolkit'

export const projectNavigationSlice = createSlice({
    name: 'projectNavigation',
    initialState: {
      value: "PROJECT"
    },
    reducers: {
      projectTrigger: state => {
        state.value = "PROJECT"
      },
      personalTrigger: state => {
        state.value = "PERSONAL"
      },

    }
  })

export const { projectTrigger, personalTrigger } = projectNavigationSlice.actions

export default projectNavigationSlice.reducer