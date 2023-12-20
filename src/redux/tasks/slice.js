import {createSlice} from "@reduxjs/toolkit"
import {fetchTasksThunk} from "./operations"

const initialState = {
  tasks: [],
  isLoading: false,
  error: null,
  filter: 'all',
}

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchTasksThunk.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchTasksThunk.fulfilled, (state, {payload}) => {
        state.tasks = payload
        state.isLoading = false
      })
      .addCase(fetchTasksThunk.rejected, (state, {payload}) => {
        state.error = payload
        state.isLoading = false
      })
  },

  reducers: {
    deleteTasks: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload)
    },
    addTasks: (state, action) => {
      state.tasks.push(action.payload)
    },
    toggleTasks: (state, action) => {
      const task = state.tasks.find((item) => item.id === action.payload)
      task.completed = !task.completed
    },
    filterTask: (state, {payload}) => {
      state.filter = payload
    }
  },
})

export const {deleteTasks, addTasks, toggleTasks, filterTask} = tasksSlice.actions
export const taskReducer = tasksSlice.reducer
