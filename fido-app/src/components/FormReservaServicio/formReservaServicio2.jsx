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
      <table>
        <thead>
          <tr>
            <th>Mascota</th>
            <th>Servicio</th>
            <th>Comentario</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {values.registros.map((registro, index) => (
            <tr key={index}>
              <td>
                <Field
                  name={`registros.${index}.mascota`}
                  as="select"
                >
                  <option value="">Seleccionar</option>
                  <option value="Nayla">Nayla</option>
                  <option value="Odie">Odie</option>
                  <option value="Ziggy">Ziggy</option>
                </Field>
              </td>
              <td>
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
              </td>
              <td>
                <Field
                  type="text"
                  name={`registros.${index}.comentario`}
                />
              </td>
              <td>
                {index !== 0 && (
                  <button type="button" onClick={() => remove(index)}>
                    Eliminar
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        type="button"
        onClick={() => push({ mascota: "", servicio: "", comentario: "" })}
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
