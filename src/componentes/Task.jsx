import { useState } from "react";

const Task = ({ task, onDelete, onToggleDone, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleConfirmEdit = () => {
    onEdit(editedText);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedText(task.text);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleConfirmEdit} id="buttonConfirm">
            Confirmar
          </button>
          <button onClick={handleCancelEdit} id="buttonCancel">
            Cancelar
          </button>
        </>
      ) : (
        <>
          <span
            onClick={onToggleDone}
            style={{ textDecoration: task.done ? "line-through" : "none" }}
          >
            {task.text}
          </span>
          <div className="buttons">
            <button onClick={handleEdit}>Editar</button>
            <button onClick={onDelete}>Remover</button>
          </div>
        </>
      )}
    </li>
  );
};

export default Task;
