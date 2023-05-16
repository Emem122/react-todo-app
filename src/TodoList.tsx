import React from "react";

export const TodoList = ({ data, handleComplete, handleDelete }) => {
	const uncompletedTodo = data.filter((item) => !item.isDone);
	const completedTodo = data.filter((item) => item.isDone);

	return (
		<div>
			<h2>Todo</h2>
			<ul>
				{uncompletedTodo.map((item) => {
					return (
						<li key={item.id}>
							{item.text}
							<button onClick={() => handleComplete(item.id)}>Done</button>
							<button onClick={() => handleDelete(item.id)}>Delete</button>
						</li>
					);
				})}
			</ul>
			<h2>Done</h2>
			<ul>
				{completedTodo.map((item) => {
					return (
						<li key={item.id}>
							{item.text}
							<button onClick={() => handleComplete(item.id)}>Undo</button>
							<button onClick={() => handleDelete(item.id)}>Delete</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
