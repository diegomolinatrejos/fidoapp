import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CargarAvatar from "./Avatar/avatar";

const validationSchema = Yup.object().shape({
  nombre: Yup.string().required("Este campo es obligatorio"),
  foto: Yup.mixed().required("Este campo es obligatorio"),
});

const onSubmit = (values) => {
  // Manejar el envío del formulario aquí
  console.log(values);
};

const CrearFormulario = () => {
  return (
    <Formik
      initialValues={{ nombre: "", foto: null }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ setFieldValue }) => (
        <Form>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <Field name="nombre" type="text" />
            <ErrorMessage name="nombre" />
          </div>
          <div>
            <label htmlFor="foto">Foto:</label>
            <CargarAvatar
              onImageChange={(resizedFile) => {
                setFieldValue("foto", resizedFile);
              }}
            />
            <ErrorMessage name="foto" />
          </div>
          <button type="submit">Enviar</button>
        </Form>
      )}
    </Formik>
  );
};

export default CrearFormulario;
