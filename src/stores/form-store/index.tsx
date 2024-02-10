import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  shortName: null,
}

export const { reducer, actions } = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setShortName(state, action) {
      state.shortName = action.payload
    },
  },
})
