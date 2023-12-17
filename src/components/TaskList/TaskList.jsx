import React from 'react'
import { AddTaskForm } from './AddTaskForm'
import { FilterTask } from './FilterTask'
import { DataList } from './DataList'

export const TaskList = () => {
	return (
		<div>
			<AddTaskForm />
			<FilterTask />
			<DataList />
		</div>
	)
}
