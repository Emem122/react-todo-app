import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { initialData } from "./data";
import { Input } from "./Input";
import { TodoList } from "./TodoList";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([...initialData]);
  const [isEdit, setIsEdit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      const newData = data.map((item) => {
        if (item.isEditting) {
          return { ...item, text: input, isEditting: false };
        } else {
          return { ...item };
        }
      });
      setData(newData);
      setIsEdit(false);
    } else {
      setData([...data, { id: uuidv4(), text: input, isDone: false, isEditting: false }]);
    }
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

  const handleEdit = (id) => {
    if (isEdit) {
      const newData = data.map((item) => {
        return { ...item, isEditting: false };
      });
      setData(newData);
      setInput("");
      setIsEdit(false);
    } else {
      const newData = data.map((item) => {
        if (item.id === id) {
          setInput(item.text);
          setIsEdit(true);
          return { ...item, isEditting: true };
        } else {
          return { ...item, isEditting: false };
        }
      });
      setData(newData);
    }
  };

  return (
    <>
      <h1>Todo App</h1>
      <Input input={input} handleInput={handleInput} handleSubmit={handleSubmit} />
      <TodoList data={data} handleComplete={handleComplete} handleDelete={handleDelete} handleEdit={handleEdit} />
    </>
  );
}

export default App;
