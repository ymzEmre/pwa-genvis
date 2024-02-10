import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  url: null,
  name: null,
  loading: false,
  error: null,
}

export const { reducer, actions } = createSlice({
  name: 'upload',
  initialState,
  reducers: {
    setUploadURL(state, action) {
      state.url = action.payload
    },
    setUploadName(state, action) {
      state.name = action.payload
    },
  },
})
