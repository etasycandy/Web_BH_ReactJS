import { configureStore } from '@reduxjs/toolkit'

import orderSlice from '../components/slices/cartSlice'

export const store = configureStore({
  reducer: {
      orders: orderSlice.reducer
  }
})