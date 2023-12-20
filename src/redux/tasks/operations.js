import axios from "axios"
import {createAsyncThunk} from "@reduxjs/toolkit"

axios.defaults.baseURL = 'https://6580bf4d3dfdd1b11c42098a.mockapi.io'

export const fetchTasksThunk = createAsyncThunk('tasks/fatchAll', async (_, thunkAPI) => {
  try {
    const {data} = await axios.get('tasks')
    return data
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message)
  }
})