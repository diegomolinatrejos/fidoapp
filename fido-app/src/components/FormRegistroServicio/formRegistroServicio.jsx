import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CargarAvatar from "../Avatar/avatar";

const validationSchema = Yup.object().shape({
  foto: Yup.mixed().required("La foto es requerida"),
  nombre: Yup.string().required("El nombre del servicio es requerido"),
  descripcion: Yup.string().required("La descripción del servicio es requerida"),
  precio: Yup.number().required("El precio del servicio es requerido"),
});

const FormRegistroServicio = () => {
  return (
    <Formik
      initialValues={{
        foto: "",
        nombre: "",
        descripcion: "",
        precio: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ setFieldValue }) => (
        <Form>
          <div>
            <label htmlFor="foto">Foto:</label>
            <CargarAvatar
              onImageChange={(resizedFile) => {
                setFieldValue("foto", resizedFile);
              }}
            />
            <ErrorMessage name="foto" className="error-message" component="div" />
          </div>
          <div>
            <label htmlFor="nombre">Nombre del servicio:</label>
            <Field type="text" name="nombre" />
            <ErrorMessage name="nombre" className="error-message" component="div" />
          </div>
          <div>
            <label htmlFor="descripcion">Descripción del servicio:</label>
            <Field type="text" name="descripcion" />
            <ErrorMessage name="descripcion" className="error-message" component="div" />
          </div>
          <div>
            <label htmlFor="precio">Precio:</label>
            <Field type="number" name="precio" />
            <ErrorMessage name="precio" className="error-message" component="div" />
          </div>
          <button type="submit">Enviar</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormRegistroServicio;
