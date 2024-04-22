import { useState } from "react";
function TaskCreate() {
  const [title, setTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  console.log(title, taskDesc);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="task-create">
      <h3>Please add a Text!</h3>
      <form className="task-form">
        <label className="task-label">Header</label>
        <input value={title} onChange={handleChange} className="task-input" />
        <label className="task-label">Add Text</label>
        <textarea
          value={taskDesc}
          onChange={handleTaskChange}
          className="task-input"
          rows={5}
        />
        <button className="task-button" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}

export default TaskCreate;
