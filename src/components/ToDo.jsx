import { useEffect, useState } from "react";
import Box from "./Box";
import ListItem from "./ListItem";

const tasksFromLS = localStorage.getItem("tasks");

export default function ToDo() {
  const [tasks, setTasks] = useState(
    tasksFromLS ? JSON.parse(tasksFromLS) : []
  );

  const [inputValue, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTodo = (event) => {
    event.preventDefault();

    if (inputValue.trim().length === 0) return;

    const newTasks = {
      id: new Date(),
      name: inputValue,
      completed: false,
    };
    
    setTasks([...tasks, ...[newTasks]]);

    setInput("");
  };


  const deleteTasks = (id) => {
    const newTasks = tasks.filter((el) => el.id != id);

    setTasks(newTasks);
  };

  const completeTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        const newTask = { ...task, completed: !task.completed };
        return newTask;
      } else {
        return task;
      }
    });

    setTasks(newTasks);
  };

  return (
    <div>
      <Box>
        <div>
          <h1 className="text-3xl text-center">ToDo App</h1>
          <form action="" className="mt-4" onSubmit={addTodo}>
            <input
              type="text"
              onChange={(event) => setInput(event.target.value)}
              value={inputValue}
              className="p-2 border border-slate-300 rounded-xl me-3 hover:scale-105 hover:duration-300 focus:outline-indigo-400 focus:scale-105 focus:shadow-lg"
            />
            <button className="bg-indigo-200 px-4 py-2 rounded-xl hover:duration-500 hover:bg-indigo-400 hover:text-gray-50 active:bg-indigo-500 hover:scale-105 hover:shadow-xl">
              Добавить
            </button>
          </form>
          <div className="my-2">
            {tasks.map((task) => (
              <ListItem
                onComplete={completeTask}
                onDelete={deleteTasks}
                key={task.id}
                {...task}
              />
            ))}
          </div>
        </div>
      </Box>
    </div>
  );
}
