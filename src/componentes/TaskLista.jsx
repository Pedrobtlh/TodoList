import Task from "./Task";

function TaskLista({ tasks, onDeleteTask, onToggleTaskDone, onEditTask }) {
  if (tasks.length === 0) {
    return <h2 style={{ color: "#fff" }}>Não há tarefas Cadastradas</h2>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={() => onDeleteTask(task.id)}
          onToggleDone={() => onToggleTaskDone(task.id)}
          onEdit={(newText) => onEditTask(task.id, newText)}
        />
      ))}
    </ul>
  );
}

export default TaskLista;
