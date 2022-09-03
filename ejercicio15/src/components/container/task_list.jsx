import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";
import TaskForm from "../pure/taskForm";
import TaskFormik from "../pure/taskFormik";

const TaskListComponent = () => {
  const defaultTask1 = new Task(
    "Example 1",
    "Descripcion por defecto 1",
    true,
    LEVELS.NORMAL
  );
  const defaultTask2 = new Task(
    "Example 2",
    "Descripcion por defecto 2",
    false,
    LEVELS.URGENT
  );
  const defaultTask3 = new Task(
    "Example 1",
    "Descripcion por defecto 3",
    false,
    LEVELS.BLOCKING
  );

  const [tasks, setTasks] = useState([
    defaultTask1,
    defaultTask2,
    defaultTask3,
  ]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Modificacion de tareas");
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      console.log("Desmontaje del componente de la tarea");
    };
  }, [tasks]);

  const completedTask = (task) => {
    console.log(`Complete this task: `, task);
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask[index].completed = !tempTask[index].completed;
    setTasks(tempTask);
  };

  const deletedTask = (task) => {
    console.log(`Deleted this task: `, task);
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask.splice(index, 1);
    setTasks(tempTask);
  };

  const addTask = (task) => {
    console.log(`Added this task: `, task);
    const tempTask = [...tasks, task];
    setTasks(tempTask);
  };

  const Table = () => {
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">Titulo</th>
            <th scope="col">Descripción</th>
            <th scope="col">Prioridad</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
            return (
              <TaskComponent
                key={index}
                task={task}
                complete={completedTask}
                remove={deletedTask}
              ></TaskComponent>
            );
          })}
        </tbody>
      </table>
    );
  };

  let taskTable;

  if (tasks.length > 0) {
    taskTable = <Table></Table>;
  } else
    taskTable = (
      <div>
        <h3> There are no tasks to show </h3>
        <h4>Please, create one</h4>
      </div>
    );

  const loadingStyle = {
    color: "grey",
    fontSize: "30px",
    fontWeight: "bold",
  };

  return (
    <div>
      {/* //TODO: Aplicar un for/map para renderizar una lista */}
      <div className="col-12">
        <div className="card">
          <div className="card-header p-3">
            <h5>Tus tareas</h5>
          </div>
          <div
            className="card-body"
            style={{ position: "relative", height: "400px" }}
            data-mdb-perfect-scrollbar="true"
          >
            {/* Add Loading Spinner */}
            {loading ? (
              <p style={loadingStyle}>Loading tasks... </p>
            ) : (
              taskTable
            )}
          </div>
          <TaskFormik add={addTask} length={tasks.length}></TaskFormik>
        </div>
      </div>
    </div>
  );
};

export default TaskListComponent;
