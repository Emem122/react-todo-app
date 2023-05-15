import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
	const [input, setInput] = useState("");
	const [data, setData] = useState([
		{
			id: uuidv4(),
			text: "todo1",
			isDone: false,
		},
		{
			id: uuidv4(),
			text: "todo2",
			isDone: false,
		},
		{
			id: uuidv4(),
			text: "todo3",
			isDone: false,
		},
		{
			id: uuidv4(),
			text: "todo4",
			isDone: true,
		},
	]);

	const uncompletedTodo = data.filter((item) => !item.isDone);
	const completedTodo = data.filter((item) => item.isDone);

	return (
		<>
			<h1>Todo App</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					setData([...data, { id: uuidv4(), text: input, isDone: false }]);
					setInput("");
				}}
			>
				<input
					type="text"
					placeholder="Add todo..."
					onChange={(e) => {
						e.preventDefault();
						setInput(e.target.value);
					}}
					value={input}
				/>
				<button type="submit">Add</button>
			</form>
			<h2>Todo</h2>
			<ul>
				{uncompletedTodo.map((item) => {
					return (
						<li key={item.id}>
							{item.text}
							<button
								onClick={() =>
									setData(
										data.map((todoItem) =>
											todoItem.id === item.id ? { ...todoItem, isDone: !todoItem.isDone } : todoItem
										)
									)
								}
							>
								Done
							</button>
							<button onClick={() => setData(data.filter((todoItem) => todoItem.id !== item.id))}>
								Delete
							</button>
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
							<button
								onClick={() =>
									setData(
										data.map((todoItem) =>
											todoItem.id === item.id ? { ...todoItem, isDone: !todoItem.isDone } : todoItem
										)
									)
								}
							>
								Undo
							</button>
							<button onClick={() => setData(data.filter((todoItem) => todoItem.id !== item.id))}>
								Delete
							</button>
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default App;
