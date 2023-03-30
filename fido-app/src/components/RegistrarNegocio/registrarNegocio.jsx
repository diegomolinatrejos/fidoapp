import React from 'react'
import Footer from '../Footer'
import { CssBaseline, Grid, Container, AppBar, Toolbar, IconButton, Typography, Paper,Avatar} from '@mui/material';
import FormRegistroNegocio from '../FormRegistroNegocio/formRegistroNegocio';
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import {useNavigate} from 'react-router-dom'
import './style.css'

function RegistrarNegocio() {
    const navigate=useNavigate()
    const indexPage=()=>{
        navigate('/')
    }
    
  return (
    <React.Fragment>
        <CssBaseline/>
          <AppBar color='default'>
            <Toolbar>
                <IconButton style={{backgroundColor:'transparent'}} onClick={()=>indexPage()}>
                    <PetsRoundedIcon className='petsIcon'/>
                </IconButton>
                <Typography style={{flexGrow:1,fontWeight:'bold', cursor:'pointer'}} onClick={()=>indexPage()}>
                    FIDO
                </Typography>
            </Toolbar>
        </AppBar>
        <div className='contenedorPrincipal'>
            <div className='contenedorFormulario'>
                <FormRegistroNegocio/>
            </div>

        </div>
        <Footer/>
    </React.Fragment>
  )
}

export default RegistrarNegocio
