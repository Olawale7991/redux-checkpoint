// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './features/taskSlice';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store