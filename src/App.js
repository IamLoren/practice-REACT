import React, {useEffect} from 'react'
import { TaskList } from './components/TaskList/TaskList'
import {useDispatch} from "react-redux"
import {fetchTasksThunk} from "./redux/tasks/operations"
//Plan
// Залогінитись на mockapi, створити ресурс для туду
// Створити файл operations, додати санки для отримання даних та додавання
// Використати санки та прописати логіку в слайсі для операцій
// Дописати логіку роботи туду на сервері

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
