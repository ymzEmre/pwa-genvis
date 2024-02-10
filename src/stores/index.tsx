import { configureStore } from '@reduxjs/toolkit'
import { reducer as uploadReducer } from './upload-store'
import { reducer as formReducer } from './form-store'

export function createStore() {
  const store = configureStore({
    reducer: {
      upload: uploadReducer,
      form: formReducer,
    },
  })

  return store
}

export const store = createStore()
