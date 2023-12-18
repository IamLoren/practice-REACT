import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../../redux/tasks/action";
import { selectTasks } from "../../redux/tasks/selectors";

export const DataList = () => {
	const dispatch = useDispatch();
	const handleDeleteItem = (id) => {
		dispatch(deleteTask(id));
	};
	const tasks = useSelector(selectTasks);
	return (
		<div>
			<ul>
				{tasks.map((task) => (
					<li key={task.id}>
						<input type="checkbox" />
						{task.title}
						<button onClick={() => handleDeleteItem(task.id)}>Delette</button>
					</li>
				))}
			</ul>
		</div>
	);
};
