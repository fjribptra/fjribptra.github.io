import { createSlice } from '@reduxjs/toolkit'

export const darkModeToggleSlice = createSlice({
    name: 'darkModeToggle',
    initialState: {
      value: false
    },
    reducers: {
      darkToggle: state => {
        state.value = !state.value
      },
    }
  })

export const { darkToggle } = darkModeToggleSlice.actions

export default darkModeToggleSlice.reducer