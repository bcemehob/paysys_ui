import { configureStore } from '@reduxjs/toolkit';
import paymentSystemReducer from './paymentSystemSlice';

export const store = configureStore({
  reducer: {
    paymentSystem: paymentSystemReducer
  },
});
