// src/features/taskSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  filter: 'all', // could be 'all', 'done', 'not_done'
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, description } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.description = description;
      }
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    filterTasks: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, editTask, toggleTask, filterTasks } = taskSlice.actions;

export const selectTasks = (state) => {
  if (state.tasks.filter === 'done') {
    return state.tasks.tasks.filter((task) => task.isDone);
  } else if (state.tasks.filter === 'not_done') {
    return state.tasks.tasks.filter((task) => !task.isDone);
  }
  return state.tasks.tasks;
};

export default taskSlice.reducer;
