import { useState } from "react";

function TaskInput({ onAddTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim()) {
      onAddTask(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Adicione um Nova Tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TaskInput;
