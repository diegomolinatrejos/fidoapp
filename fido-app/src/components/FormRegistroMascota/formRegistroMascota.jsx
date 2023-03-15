import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CargarAvatar from "../Avatar/avatar";

const validationSchema = Yup.object().shape({
  foto: Yup.string().required("La foto es requerida"),
  nombre: Yup.string().required("El nombre es requerido"),
  especie: Yup.string().required("La especie es requerida"),
  raza: Yup.string().required("La raza es requerida"),
  castrado: Yup.string()
    .oneOf(["Castrado", "No castrado"])
    .required("Este campo es requerido"),
  comportamiento: Yup.string().required("El comportamiento es requerido"),
});

const initialValues = {
  foto: "",
  nombre: "",
  especie: "",
  raza: "",
  castrado: "",
  comportamiento: "",
};

const FormRegistroMascota = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ setFieldValue }) => (
        <Form>
          <label htmlFor="foto">Foto:</label>
          <CargarAvatar
            onImageChange={(resizedFile) => {
              setFieldValue("foto", resizedFile);
            }}
          />
          <ErrorMessage name="foto" className="error-message" component="div" />

          <label htmlFor="nombre">Nombre:</label>
          <Field type="text" name="nombre" />
          <ErrorMessage
            name="nombre"
            className="error-message"
            component="div"
          />

          <label htmlFor="especie">Especie:</label>
          <Field type="text" name="especie" />
          <ErrorMessage
            name="especie"
            className="error-message"
            component="div"
          />

          <label htmlFor="raza">Raza:</label>
          <Field type="text" name="raza" />
          <ErrorMessage name="raza" className="error-message" component="div" />

          <label htmlFor="castrado">Castrado:</label>
          <Field as="select" name="castrado">
            <option value="">Selecciona una opción</option>
            <option value="Castrado">Castrado</option>
            <option value="No castrado">No castrado</option>
          </Field>
          <ErrorMessage
            name="castrado"
            className="error-message"
            component="div"
          />

          <label htmlFor="comportamiento">Comportamiento:</label>
          <Field type="text" name="comportamiento" />
          <ErrorMessage
            name="comportamiento"
            className="error-message"
            component="div"
          />

          <button type="submit">Registrar mascota</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormRegistroMascota;
