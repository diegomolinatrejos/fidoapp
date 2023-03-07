import React from 'react'
import './style.css'
import {Container, Input, IconButton} from '@mui/material'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function SearchBar() {
  return (
    <React.Fragment>
        <Container maxWidth='xs' elevation={1} className='buscadorContainer' >
            <div className='divBucador'>
                <h2 className='encabezados'>Destino</h2>
                <Input placeholder="¿Dónde?" className='input'></Input>
            </div>
            <div className='divBucador'>
                <h2 className='encabezados'>Llegada</h2>
                <Input placeholder="¿Cuándo?" className='input' ></Input>
            </div>
            <div className='divBucador'>
                <h2 className='encabezados'>Salida</h2>
                <Input placeholder="¿Cuándo?" className='input'></Input>
            </div>
            <div className='divBucador2'>
                <h2 className='encabezados'>Mascota</h2>
                <Input placeholder="¿Cuántos?" className='input' ></Input>
            </div>
            <div className='divBoton'>
                <IconButton edge="start" className='icon'>
                    <SearchRoundedIcon/>
                </IconButton>
            </div>
        </Container>
    </React.Fragment>
  )
}

export default SearchBar
