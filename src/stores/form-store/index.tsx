import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  shortName: null,
  appURL: null,
}

export const { reducer, actions } = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setShortName(state, action) {
      state.shortName = action.payload
    },
    setAppURL(state, action) {
      state.appURL = action.payload
    },
  },
})
