import TaskInput from "./componentes/TaskInput";
import TaskLista from "./componentes/TaskLista";
import styles from "./App.module.css";

//Hooks

import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks") || [])
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    //Título, Status e ID
    setTasks([...tasks, { id: Date.now(), text: task, done: false }]);
    //LocalStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskDone = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  const editTask = (taskId, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <div className={styles.container}>
      <h1>TODO</h1>
      <TaskInput onAddTask={addTask} />
      <TaskLista
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleTaskDone={toggleTaskDone}
        onEditTask={editTask}
      />
    </div>
  );
}

export default App;
