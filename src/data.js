import { v4 as uuidv4 } from "uuid";

export const initialData = [
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
];
