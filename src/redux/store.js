import { taskReducer } from './tasks/slice'

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
	reducer: { taskData: taskReducer },
})
