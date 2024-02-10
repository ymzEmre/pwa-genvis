'use client'
import { Provider } from 'react-redux'
import { store } from './index'

export function StoreProvider({ children }: any) {
  return <Provider store={store}>{children}</Provider>
}
