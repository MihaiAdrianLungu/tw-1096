import { configureStore } from '@reduxjs/toolkit'
import globalSlice from './slices/globalSlice'
import orderSlice from './slices/orderSlice'

export default configureStore({
  reducer: {
    global: globalSlice,
    order: orderSlice
  },
})