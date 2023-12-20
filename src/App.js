import React, { useEffect } from 'react'
import { TaskList } from './components/TaskList/TaskList'
import { useDispatch } from 'react-redux'
import { fetchTasksThunk } from './redux/tasks/operations'
//Plan

// Додати складні селектори
// Перенести фільтрацію в селектори та зробити createSelector
// Зробити підрахунок активних задач через createSelector
// Заблокувати кнопку видалення коли йде запит

const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchTasksThunk())
	}, [dispatch])

	return (
		<div>
			<TaskList />
		</div>
	)
}

export default App
