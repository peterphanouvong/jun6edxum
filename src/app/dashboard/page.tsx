"use client";

import { useState } from "react";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-grow border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex items-center justify-between border rounded p-2 mb-2 cursor-pointer transition ${
              task.completed ? "bg-green-100" : "bg-white"
            }`}
          >
            <span
              onClick={() => toggleTask(task.id)}
              className={`flex-1 select-none ${task.completed ? "line-through text-gray-500" : ""}`}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="ml-4 text-red-500 hover:text-red-700"
              aria-label="Delete task"
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
