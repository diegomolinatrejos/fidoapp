import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import SearchBar from "../SearchBar/index.jsx";

const validationSchema = Yup.object().shape({
  nombreNegocio: Yup.string().required("Campo requerido"),
});

const FormReservaServicio = () => {
  return (
    <Formik
      initialValues={{
        nombreNegocio: "",
        registros: [{ mascota: "", servicio: "", comentario: "" }],
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
      }) => (
        <Form>
          <SearchBar />

          <div className="form-section">
            <label htmlFor="nombreNegocio">Nombre del negocio:</label>
            <Field name="nombreNegocio" type="text" />
            {errors.nombreNegocio && touched.nombreNegocio && (
              <div className="error">{errors.nombreNegocio}</div>
            )}
          </div>

          <FieldArray name="registros">
            {({ push, remove }) => (
              <div className="form-section">
                {values.registros.map((registro, index) => (
                  <div key={index}>

                    <label>Registro #{index + 1}</label>
                    <div>
                      <label htmlFor={`mascota.${index}`}>
                        Nombre mascota:
                      </label>
                      <Field
                        name={`registros.${index}.mascota`}
                        as="select"
                        id={`mascota.${index}`}
                      >
                        <option value="">Seleccionar</option>
                        <option value="Nayla">Nayla</option>
                        <option value="Odie">Odie</option>
                        <option value="Ziggy">Ziggy</option>
                      </Field>
                    </div>

                    <div>
                      <label>Servicio:</label>
                      <div>
                        <label>
                          <Field
                            type="checkbox"
                            name={`registros.${index}.servicio`}
                            value="hospedaje"
                          />
                          Hospedaje
                        </label>
                      </div>

                      <div>
                        <label>
                          <Field
                            type="checkbox"
                            name={`registros.${index}.servicio`}
                            value="corte"
                          />
                          Corte
                        </label>
                      </div>

                      <div>
                        <label>
                          <Field
                            type="checkbox"
                            name={`registros.${index}.servicio`}
                            value="baño"
                          />
                          Baño
                        </label>
                      </div>

                      <div>
                        <label>
                          <Field
                            type="checkbox"
                            name={`registros.${index}.servicio`}
                            value="corte con baño"
                          />
                          Corte con baño
                        </label>
                      </div>
                    </div>

                    <div>
                      <label htmlFor={`comentario.${index}`}>Comentario:</label>
                      <Field
                        type="text"
                        name={`registros.${index}.comentario`}
                        id={`comentario.${index}`}
                      />
                    </div>

                    {index !== 0 && (
                      <button type="button" onClick={() => remove(index)}>
                        Eliminar
                      </button>
                    )}
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() =>
                    push({ mascota: "", servicio: "", comentario: "" })
                  }
                >
                  Agregar
                </button>
              </div>
            )}
          </FieldArray>

          <div className="form-section">
            <button type="reset" onClick={handleReset}>
              Borrar
            </button>
            <button type="submit">Enviar</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormReservaServicio;
