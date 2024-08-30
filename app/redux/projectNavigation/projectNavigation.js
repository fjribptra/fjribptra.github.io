import { createSlice } from '@reduxjs/toolkit'

export const projectNavigationSlice = createSlice({
    name: 'projectNavigation',
    initialState: {
      value: "WORKS_PROJECT"
    },
    reducers: {
      workProjectsTrigger: state => {
        state.value = "WORKS_PROJECT"
      },
      sideProjectsTrigger: state => {
        state.value = "SIDE_PROJECT"
      },
      smallProjectsTrigger: (state) => {
        state.value = "SMALL_PROJECT"
      }
    }
  })

export const { workProjectsTrigger, sideProjectsTrigger, smallProjectsTrigger } = projectNavigationSlice.actions

export default projectNavigationSlice.reducer