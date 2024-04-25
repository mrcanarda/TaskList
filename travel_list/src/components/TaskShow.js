import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, updatedTitle, updateTaskDesc) => {
    setShowEdit(false);
    onUpdate(id, updatedTitle, updateTaskDesc);
  };

  console.log(task);
  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h3 className="task-title">Your Mission</h3>
          <p>{task.title}</p>
          <h3 className="task-title">Do your job</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button className="task-delete" onClick={handleDeleteClick}>
              Delete
            </button>
            <button className="task-edit" onClick={handleEditClick}>
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
