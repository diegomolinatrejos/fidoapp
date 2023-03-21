import React from 'react'
import { Avatar, Typography, CssBaseline} from '@mui/material'
import Logged_Header from '../Header/second_header'
import Footer from '../Footer'
import FormRegistroServicio from '../FormRegistroServicio/formRegistroServicio'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button,Container} from 'reactstrap';

const data=[{
    imgServicio:'https://i.pinimg.com/564x/8a/df/12/8adf12b050d665990de59c11960d4bc5.jpg',
    nombre:'Baño',
    descripcion:'Solo baño, pelo corto, menos de 10kg',
    tiempo:'30',
    precio:'10000'
},{
    imgServicio:'',
    nombre:'Baño y corte',
    descripcion:'Baño y corte, pelo largo, más de 15kg',
    tiempo:'90',
    precio:'15000'
}];

function ServiciosNegocio() {
    const state={
        data:data
    }

  return (
    <React.Fragment>
        <CssBaseline/>
        <Logged_Header/>
        <div className='servicios'>
            <Typography component='h1' variant='h1' style={{fontSize:'1.5rem', height:'40px', fontWeight:'700', color:'#8C30F5',fontFamily:[ 'Source Sans Pro','sans-serif'], marginTop:'6rem', marginBottom:'2rem'}}>Mis Servicios</Typography>
            <Container className='ContainerTable'>
                <Table className='tblData'>
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Precio</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.data.map((elemento)=>(
                            <tr>
                                <td style={{padding:'8px 8px 8px 25px'}}><Avatar src={elemento.imgServicio} sx={{ width: 37, height: 37}} /></td>
                                <td style={{paddingTop:'15px'}}>{elemento.nombre}</td>
                                <td style={{paddingTop:'15px'}}>{elemento.descripcion}</td>
                                <td style={{paddingTop:'15px'}}>₡{elemento.precio}</td>
                                <td><Button style={{backgroundColor:'#8C30F5'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                </svg></Button> <Button color='danger'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                                </svg></Button></td>
                            </tr>
                        ))}
                    </tbody>  
                </Table>
            </Container>
            <Typography component='h1' variant='h1' style={{fontSize:'1.5rem', height:'40px', fontWeight:'700', color:'#8C30F5',fontFamily:[ 'Source Sans Pro','sans-serif'], marginBottom:'2rem'}}>Formulario Servicios</Typography>
            <FormRegistroServicio/>
        </div>
        
        
        <Footer/>
    </React.Fragment>
  )
}

export default ServiciosNegocio
