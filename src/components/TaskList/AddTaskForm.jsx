import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasks/action';
import { nanoid } from 'nanoid';

export const AddTaskForm = () => {
	const [newTitle, setNewTitle] = useState('')
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		const newTask = { id: nanoid(), complited: false, title: newTitle }
		dispatch(addTask(newTask))
		setNewTitle('');
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input value={newTitle} onChange={(ev) => setNewTitle(ev.target.value)} />
				<button >Add</button>
			</form>
		</div>
	)
}
