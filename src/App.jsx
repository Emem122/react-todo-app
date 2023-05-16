import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { initialData } from "./data";
import { Input } from "./Input";
import { TodoList } from "./TodoList";

function App() {
	const [input, setInput] = useState("");
	const [data, setData] = useState([...initialData]);

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
			<Input input={input} handleInput={handleInput} handleSubmit={handleSubmit} />
			<TodoList data={data} handleComplete={handleComplete} handleDelete={handleDelete} />
		</>
	);
}

export default App;
