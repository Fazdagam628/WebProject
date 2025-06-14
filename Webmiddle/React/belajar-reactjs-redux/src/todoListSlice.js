import { createSlice } from "@reduxjs/toolkit";

let id = 0;

export const todoListSlice = createSlice({
  name: "todoList",
  initialState: [],
  reducers: {
    /**
     * Add a new todo to the list.
     * @param {object} state - The current state of the todo list.
     * @param {object} action - The action containing the name of the new todo.
     */
    addTodo: (state, action) => {
      const { name } = action.payload;
      state.push({ name, id: id++ });
    },

    /**
     * Remove a todo from the list based on its id.
     * @param {object} state - The current state of the todo list.
     * @param {object} action - The action containing the id of the todo to remove.
     * @param {number} action.payload.id - The id of the todo to remove.
     */
    removeTodo: (state, action) => {
      const { id } = action.payload;
      const index = state.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    /**
     * Update the name of a todo in the list based on its id.
     * @param {object} state - The current state of the todo list.
     * @param {object} action - The action containing the id of the todo to update and the new name.
     * @param {number} action.payload.id - The id of the todo to update.
     * @param {string} action.payload.name - The new name for the todo.
     */

    updateTodo: (state, action) => {
      const { id, name } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.name = name;
      }
    },
  },
  selectors: {
    getTodo: (state, id) => {
      return state.find((todo) => todo.id === id);
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoListSlice.actions;
export const { getTodo } = todoListSlice.selectors;
