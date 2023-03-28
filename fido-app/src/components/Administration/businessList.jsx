import React, {useState} from 'react'
import { Typography } from "@mui/material";
import Logged_Header from "../Header/second_header";
import Footer from "../Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Container, Button } from "reactstrap";
import Swal from 'sweetalert2';


function BusinessList() {
  const [data, setData] = useState([
    {
      id: 1,  // Agrega un id único para cada objeto de datos
      nombre: "Paw Grooming",
      fechaRegistro: "28/03/2023",
      status: "Activo"
    },
    {
      id: 2,  // Agrega un id único para cada objeto de datos
      nombre: "Veterinaria Home",
      fechaRegistro: "15/03/2023",
      status: "Activo"
    },
    {
      id: 3,  // Agrega un id único para cada objeto de datos
      nombre: "Hotel Canino",
      fechaRegistro: "16/03/2023",
      status: "Inactivo"
    }
    
  ]);

  const eliminar= (dato) => {
    Swal.fire({
      title: "¿Estás seguro de eliminar a "+dato.nombre+"?",
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar!',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        const newData = [...data];
        const index = newData.findIndex((item) => item.nombre === dato.nombre);
        newData.splice(index, 1);
        setData(newData);
        Swal.fire(
          'Eliminado!',
          'El negocio ha sido eliminado.',
          'success'
        )
      }
    })
  };

  const [query,setQuery]=useState("");

  const keys=["nombre", "status", "fechaRegistro"];


  const search=(info)=>{
    return info.filter(item=>
      keys.some(key=>item[key].toLowerCase().includes(query)));
  }



  return (
    <React.Fragment>
        <Logged_Header/>
        <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h1"
          style={{
            fontSize: "1.5rem",
            height: "40px",
            fontWeight: "700",
            color: "#8C30F5",
            fontFamily: ["Source Sans Pro", "sans-serif"],
            marginTop: "6rem",
            marginBottom: "1rem",
          }}
        >
         Negocios FIDO
        </Typography>
      </div>
      <div className="Reservation">
          <div className="filtroBusqueda">
          <input type="text" name="" id="" placeholder="Buscar" onChange={e=>setQuery(e.target.value)}/>
          </div>

          <Container
          style={{ marginBottom: "5rem", marginTop: "2rem" }}
          className="ContainerTable">
            <Table style={{ marginBottom: "5rem" }} className="tblData">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Fecha Registro</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {search(data).map((dato, index) => (
                <tr key={index}>
                  <td style={{ paddingTop: "15px" }}>{dato.nombre}</td>
                  <td style={{ paddingTop: "15px" }}>{dato.fechaRegistro}</td>
                  <td style={{ paddingTop: "15px" }}>{dato.status}</td>
                  <td style={{ paddingTop: "15px" }}>
                    <Button style={{ backgroundColor: "#8C30F5" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-pencil-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                      </svg>
                    </Button>{" "}
                    <Button color="danger" onClick={() => eliminar(dato)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash3-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                      </svg>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          </Container>

      </div>

      <div className="FixedFooter">
          <Footer />
      </div> 

    </React.Fragment>
  )
}

export default BusinessList;
