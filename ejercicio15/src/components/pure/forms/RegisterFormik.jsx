import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";

import { User } from "../../../models/user.class";
import { ROLES } from "../../../models/roles.enum";

export default function RegisterFormik() {
  let user = new User();

  const submit = (values) => {
    console.log("Register user");
    console.log(values);
    alert("Register user");
  };

  const initialCredentials = {
    email: "",
    password: "",
    confirm: "",
    username: "",
    role: ROLES.USER,
  };

  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "El username es demasiado corto")
      .max(20, "El username es demasiado Largo")
      .required("Usuario es requerido"),
    role: Yup.string()
      .oneOf([ROLES.ADMIN, ROLES.USER], "Debe seleccionar: User / Admin.")
      .required("Rol es requerido"),
    email: Yup.string()
      .email("Formato de correo Invalido.")
      .required("El correo es requerido."),
    password: Yup.string()
      .min(6, "La contraseña es demasiado corta")
      .required("La contraseña es obligatoria."),
    confirm: Yup.string()
      .when("password", {
        is: (value) => (value && value.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Las contraseñas no coinciden"
        ),
      })
      .required("La confirmación de contraseña es obligatoria"),
  });

  // const [data, setData] = useState(initialData);

  return (
    <div>
      <h1>Register Formik</h1>
      <Formik
        initialValues={initialCredentials}
        validationSchema={registerSchema}
        onSubmit={async (values) => {
          await new Promise((resolve, reject) => {
            setTimeout(resolve, 500);
          });
          submit();
        }}
        // {async (values) => {
        //   await new Promise((r) => {
        //     setTimeout(r, 500);
        //   });
        //   alert(JSON.stringify(values, null, 2));
        //   localStorage.setItem("credentials", values);
        // }}
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
            <Form style={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <label htmlFor="username">Username: </label>
              <Field
                id="username"
                type="text"
                name="username"
                placeholder="Arnold"
              />
              {errors.username && touched.username && (
                <ErrorMessage component="div" name="username">
                  {(msg) => <p>{msg}</p>}
                </ErrorMessage>
              )}

              <label htmlFor="email">Email: </label>
              <Field
                id="email"
                type="email"
                name="email"
                placeholder="example@email.com"
              />
              {errors.email && touched.email && (
                <ErrorMessage component="div" name="email">
                  {(msg) => <p>{msg}</p>}
                </ErrorMessage>
              )}

              <label htmlFor="password">Password: </label>
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="password"
              />
              {errors.password && touched.password && (
                <div className="error">
                  <ErrorMessage component="div" name="password" />
                </div>
              )}

              <label htmlFor="confirm">Confirm Password: </label>
              <Field
                id="confirm"
                name="confirm"
                type="password"
                placeholder="Confirm Password"
              />
              {errors.confirm && touched.confirm && (
                <div className="error">
                  <ErrorMessage component="div" name="confirm" />
                </div>
              )}

              <button type="submit" style={{ marginTop: "1rem" }}>
                Login
              </button>

              {isSubmitting ? <p>Sending your credentials...</p> : null}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
