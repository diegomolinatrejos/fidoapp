import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CrearRegistroRapido = () => {
    return (
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          firstName: '',
          lastName: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string().email('Correo electrónico inválido').required('Requerido'),
          password: Yup.string()
            .min(6, 'Debe tener al menos 6 caracteres')
            .matches(
              /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/,
              'Debe contener al menos un número, una letra mayúscula y una letra minúscula'
            )
            .required('Requerido'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
            .required('Requerido'),
          firstName: Yup.string().required('Requerido'),
          lastName: Yup.string().required('Requerido'),
        })}
        onSubmit={(values) => {
          const formData = JSON.stringify(values);
          console.log(formData);
        }}
      >
        {(formik) => (
          <Form>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <Field type="email" name="email" className="form-control" />
              <ErrorMessage name="email" className="text-danger" />
            </div>
  
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <Field type="password" name="password" className="form-control" />
              <ErrorMessage name="password" className="text-danger" />
            </div>
  
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmar contraseña</label>
              <Field type="password" name="confirmPassword" className="form-control" />
              <ErrorMessage name="confirmPassword" className="text-danger" />
            </div>
  
            <div className="form-group">
              <label htmlFor="firstName">Primer nombre</label>
              <Field type="text" name="firstName" className="form-control" />
              <ErrorMessage name="firstName" className="text-danger" />
            </div>
  
            <div className="form-group">
              <label htmlFor="lastName">Primer apellido</label>
              <Field type="text" name="lastName" className="form-control" />
              <ErrorMessage name="lastName" className="text-danger" />
            </div>
  
            <button type="submit" className="btn btn-primary">
              Registrarse
            </button>
          </Form>
        )}
      </Formik>
    );
    const onSubmitHandler = (values) => {
        const formData = JSON.stringify(values);
        console.log(formData);
      }      
  };
  
  export default CrearRegistroRapido;
