import React from 'react'
import { AddTaskForm } from './AddTaskForm'
import { FilterTask } from './FilterTask'
import { DataList } from './DataList'
import {useSelector} from "react-redux"
import {selectError, selectIsLoading} from "../../redux/tasks/selectors"

export const TaskList = () => {
	const isLoading = useSelector(selectIsLoading)
	const error = useSelector(selectError)

	return (
		<div>
			<AddTaskForm />
			<FilterTask />
			<DataList />
			{isLoading && <p>Loading...</p>}
			{error && <p>Error: {error}</p>}
		</div>
	)
}
