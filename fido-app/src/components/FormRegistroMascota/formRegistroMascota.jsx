import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CargarAvatar from "../Avatar/avatar";
import './style.css'

const validationSchema = Yup.object().shape({
  foto: Yup.string().required("La foto es requerida"),
  especie: Yup.string().required("La especie es requerida"),
  nombre: Yup.string().required("El nombre es requerido"),
  raza: Yup.string().required("La raza es requerida"),
  peso: Yup.number()
    .required("El peso es requerido")
    .positive("El peso debe ser mayor que cero")
    .test("is-number", "El campo debe ser un número", (value) => {
      return !isNaN(value);
    })
    .test("is-decimal", "El campo debe tener máximo 2 decimales", (value) => {
      if (isNaN(value)) {
        return false;
      }
      const decimalCount = (value.toString().split(".")[1] || []).length;
      return decimalCount <= 2;
    }),
  sexo: Yup.string()
    .oneOf(["Macho", "Hembra"])
    .required("El sexo es requerido"),
  castrado: Yup.string()
    .oneOf(["Castrado", "No castrado"])
    .required("Este campo es requerido"),
  comportamiento: Yup.string(),
  veterinaria: Yup.string(),
  contactoEmergencia: Yup.string(),
});


const initialValues = {
  foto: "",
  especie: "",
  nombre: "",
  raza: "",
  peso: "",
  sexo: "",
  castrado: "",
  comportamiento: "",
  veterinaria: "",
  contactoEmergencia: "",
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
        <Form >
          <div className="formulario">
            <label htmlFor="foto">Foto:</label>
            <CargarAvatar
              onImageChange={(resizedFile) => {
                setFieldValue("foto", resizedFile);
              }}
            />
            <ErrorMessage name="foto" className="error-message" component="div" />

            <label htmlFor="especie">Especie:</label>
            <Field type="text" name="especie" className="input" />
            <ErrorMessage
              name="especie"
              className="error-message"
              component="div"
            />

            <label htmlFor="nombre">Nombre:</label>
            <Field type="text" name="nombre" />
            <ErrorMessage
              name="nombre"
              className="error-message"
              component="div"
            />

            <label htmlFor="raza">Raza:</label>
            <Field type="text" name="raza" />
            <ErrorMessage name="raza" className="error-message" component="div" />

            <label htmlFor="peso">Peso:</label>
            <Field type="number" name="peso" />
            <ErrorMessage name="peso" className="error-message" component="div" />

            <label htmlFor="sexo">Sexo:</label>
            <Field as="select" name="sexo">
              <option value="">Selecciona una opción</option>
              <option value="Macho">Macho</option>
              <option value="Hembra">Hembra</option>
            </Field>
            <ErrorMessage name="sexo" className="error-message" component="div" />

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

            <label htmlFor="veterinaria">Veterinaria donde es atendido:</label>
            <Field type="text" name="veterinaria" />
            <ErrorMessage
              name="veterinaria"
              className="error-message"
              component="div"
            />

            <label htmlFor="contactoEmergencia">Contacto de emergencia:</label>
            <Field type="text" name="contactoEmergencia" />
            <ErrorMessage
              name="contactoEmergencia"
              className="error-message"
              component="div"
            />

            <button type="submit">Registrar mascota</button>
          </div>
          
        </Form>
      )}
    </Formik>
  );
};

export default FormRegistroMascota;
