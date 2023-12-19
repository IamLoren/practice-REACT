import React from 'react'
import { useDispatch } from 'react-redux'
import { filterTask } from '../../redux/tasks/slice'

export const FilterTask = () => {
	const dispatch = useDispatch()
	const handlChangeFilter = (value) => {
		dispatch(filterTask(value))
	}
	return (
		<div>
			<button onClick={() => handlChangeFilter('all')} >All</button>
			<button onClick={() => handlChangeFilter('active')}>Active</button>
			<button onClick={() => handlChangeFilter('completed')}>Completed</button>
		</div>
	)
}
