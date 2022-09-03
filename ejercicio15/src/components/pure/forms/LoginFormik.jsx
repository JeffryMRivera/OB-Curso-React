import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginFormik = () => {
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Formato de correo Invalido.")
      .required("El correo es requerido."),
    password: Yup.string().required("La contraseña es obligatoria."),
  });

  const initialCredentials = {
    email: "",
    password: "",
  };

  return (
    <div>
      <h1>Login Formik</h1>
      <Formik
        initialValues={initialCredentials}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          await new Promise((r) => {
            setTimeout(r, 500);
          });
          alert(JSON.stringify(values, null, 2));
          localStorage.setItem("credentials", values);
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
            <Form>
              <label htmlFor="email">Email: </label>
              <Field
                id="email"
                type="email"
                name="email"
                placeholder="example@email.com"
              />
              {errors.email && touched.email && (
                <div className="error">
                  <ErrorMessage component="div" name="email">
                    {(msg) => <p>{msg}</p>}
                  </ErrorMessage>
                  {/* <p>{errors.email}</p> */}
                </div>
              )}

              {({ errors, touched }) => ({})}

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

              <button type="submit">Login</button>

              {isSubmitting ? <p>Login your credentials...</p> : null}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginFormik;
