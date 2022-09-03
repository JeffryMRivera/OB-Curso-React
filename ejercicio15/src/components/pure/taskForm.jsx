import React, { useRef } from "react";
import PropTypes from "prop-types";

import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";

const TaskForm = ({ add, length }) => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef(LEVELS.NORMAL);

  function addTask(e) {
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );
    add(newTask);
  }

  const normalStyle = {
    color: "blue",
    fontWeight: "bold",
  };

  const UrgentStyle = {
    color: "yellow",
    fontWeight: "bold",
  };

  const blockingStyle = {
    color: "tomato",
    fontWeight: "bold",
  };

  return (
    <form
      onSubmit={addTask}
      className="d-flex justify-align-content-center align-items-center mb-4"
    >
      <div className="form-outline flex-fill">
        <input
          ref={nameRef}
          id="inputName"
          type="text"
          required
          autoFocus
          placeholder="Task Name"
          className="form-control form-control-lg"
        />
        <input
          ref={descriptionRef}
          id="inputDescription"
          type="text"
          placeholder="Task Description"
          required
          className="form-control form-control-lg"
        />
        <select
          ref={levelRef}
          defaultValue={LEVELS.NORMAL}
          id="selectLevel"
          className="form-control form-control-lg"
        >
          <option value={LEVELS.NORMAL}>Normal</option>
          <option value={LEVELS.URGENT}>Urgent</option>
          <option value={LEVELS.BLOCKING}>Blocking</option>
        </select>
        <button type="submit" className="btn btn-success btn-lg ms-2">
          {length > 0 && "Add Your Task"}
          {length === 0 && "Create Your First Task"}
        </button>
      </div>
    </form>
  );
};

TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
};

export default TaskForm;
