import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";

const TaskFormik = ({ add, length }) => {
  const initialTask = {
    name: "",
    description: "",
    level: LEVELS.NORMAL,
    completed: false,
  };

  const TaskSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "El nombre de la tarea es demasiado corto")
      .max(100, "El nombre de la tarea es demasiado Largo")
      .required("Nombre de la tarea es requerido"),
    description: Yup.string(),
    level: Yup.string()
      .oneOf(
        [LEVELS.NORMAL, LEVELS.BLOCKING, LEVELS.URGENT],
        "Debe seleccionar: Normal / Urgent / Blocking."
      )
      .required("El nivel es requerido."),
  });

  return (
    <div>
      <Formik
        initialValues={initialTask}
        validationSchema={TaskSchema}
        onSubmit={async (values) => {
          await new Promise((resolve, reject) => {
            setTimeout(resolve, 500);
          });
          const newTask = new Task(
            values.name,
            values.description,
            false,
            values.level
          );
          add(newTask);
        }}
      >
        {/* We obtain props from formik */}
        {(props) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleSubmit,
            handleBlur,
          } = props;

          return (
            <Form className="d-flex justify-align-content-center align-items-center mb-4">
              <div className="form-outline flex-fill">
                <Field
                  autoFocus={true}
                  id="name"
                  type="text"
                  name="name"
                  className="form-control form-control-lg"
                  placeholder="Task Name"
                />
                {errors.name && touched.name && (
                  <ErrorMessage component="div" name="name">
                    {(msg) => <p>{msg}</p>}
                  </ErrorMessage>
                )}

                <Field
                  id="description"
                  type="text"
                  name="description"
                  className="form-control form-control-lg"
                  placeholder="Task Description"
                />
                {errors.description && touched.description && (
                  <ErrorMessage component="div" name="description">
                    {(msg) => <p>{msg}</p>}
                  </ErrorMessage>
                )}

                <Field
                  as="select"
                  defaultValue={LEVELS.NORMAL}
                  name="level"
                  id="level"
                  className="form-control form-control-lg"
                >
                  <option value={LEVELS.NORMAL}>Normal</option>
                  <option value={LEVELS.URGENT}>Urgent</option>
                  <option value={LEVELS.BLOCKING}>Blocking</option>
                </Field>

                <button type="submit" className="btn btn-success btn-lg ms-2">
                  {length > 0 && "Add Your Task"}
                  {length === 0 && "Create Your First Task"}
                </button>

                {isSubmitting ? <p>Sending your task...</p> : null}
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

TaskFormik.propTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
};

export default TaskFormik;
