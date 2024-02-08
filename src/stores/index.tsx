import { configureStore } from '@reduxjs/toolkit'
import { reducer as uploadReducer } from './upload-store'

export function createStore() {
  const store = configureStore({
    reducer: {
      upload: uploadReducer,
    },
  })

  return store
}

export const store = createStore()
