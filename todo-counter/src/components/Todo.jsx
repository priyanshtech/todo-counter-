import { useState } from "react";

export default function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  
  const addTask = () => {
    if (task.trim() === "") return;

    setTodos([...todos, task]);
    setTask("");
  };
  const deleteTask = (indexToRemove) => {
  setTodos(todos.filter((word, index)=> index !== indexToRemove));}



  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl w-96 mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Todo List</h2>

      <div className="flex gap-2 mb-4">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") addTask(); }}

          className="w-full px-3 py-2 rounded-lg text-black"
          placeholder="Enter a task..."
        />
        <button
          onClick={addTask}

          disabled={task.trim() === ""}
          className={`px-4 py-2 rounded-lg t
    ${task.trim() === "" ? "bg-blue-400 cursor-not-allowed" : "bg-blue-700 active:scale-75 transition-transform duration-150"}
  `}
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
  {todos.map((item, index) => (
    <li
      key={index}
      className="flex justify-between bg-gray-800 px-3 py-2 rounded-lg"
    >
     {index+1}) {item}
     <button
        onClick={() => deleteTask(index)}
        className="text-red-400 font-bold transiton-transform duration-150 active:scale-95 hover:scale-125 hover:text-red-600"
      >
        x
      </button>
    </li>
  ))}
</ul>
{todos.length>0 && 
<button 
  onClick={() =>setTodos([])}
  className="mt-4 w-full bg-red-600 px-4 py-2 rounded-lg text-white font-bold transition-transform duration-150 active:scale-75">
  CLEAR ALL </button>}


    </div>
  );
}
