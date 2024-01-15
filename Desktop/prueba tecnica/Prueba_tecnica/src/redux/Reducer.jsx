import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push({ ...action.payload, id: Date.now().toString() });
    },
    removeTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    completeTask: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: true } : todo
      );
    },
  },
});

export const { addTask, removeTask, completeTask } = todosSlice.actions;
export const reducer = todosSlice.reducer;
