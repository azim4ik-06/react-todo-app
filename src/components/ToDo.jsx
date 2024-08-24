import { useEffect, useState } from "react";
import Box from "./Box";
import ListItem from "./ListItem";

export default function ToDo() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [
          {
            id: 1,
            name: "Закрыть задачу",
            completed: false,
          },
          {
            id: 2,
            name: "Приготовить ужин",
            completed: false,
          },
          {
            id: 3,
            name: "Купить продукты",
            completed: false,
          },
        ];
  });

  const [inputValue, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTodo = (event) => {
    event.preventDefault();

    const newTasks = {
      id: Date.now(),
      name: inputValue,
      completed: false,
    };

    setTasks([...tasks, newTasks]);
    setInput("");
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
              className="p-2 border border-slate-300 rounded-xl me-3"
            />
            <button
              onClick={addTodo}
              className="bg-indigo-200 px-4 py-2 rounded-xl hover:bg-indigo-400 active:bg-indigo-500"
            >
              Добавить
            </button>
          </form>
          <div className="space-y-2">
            {tasks.map((task) => (
              <ListItem key={task.id} {...task} />
            ))}
          </div>
        </div>
      </Box>
    </div>
  );
}
