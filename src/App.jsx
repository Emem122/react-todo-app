import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { initialData } from "./data";

function App() {
	const [input, setInput] = useState("");
	const [data, setData] = useState([...initialData]);

	const uncompletedTodo = data.filter((item) => !item.isDone);
	const completedTodo = data.filter((item) => item.isDone);

	const handleSubmit = (e) => {
		e.preventDefault();
		setData([...data, { id: uuidv4(), text: input, isDone: false }]);
		setInput("");
	};

	const handleInput = (e) => {
		e.preventDefault();
		setInput(e.target.value);
	};

	const handleComplete = (id) => {
		const newData = data.map((item) => {
			if (item.id === id) {
				return { ...item, isDone: !item.isDone };
			}
			return item;
		});
		setData(newData);
	};

	const handleDelete = (id) => {
		const newData = data.filter((item) => item.id !== id);
		setData(newData);
	};

	return (
		<>
			<h1>Todo App</h1>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="Add todo..." onChange={handleInput} value={input} />
				<button type="submit">Add</button>
			</form>
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
		</>
	);
}

export default App;
