import React from 'react'
import './style.css'
import {Typography, Container, CssBaseline} from '@mui/material'
import Instagram from './bxl_instagram.svg'
import Facebook from './facebook.svg'
import WhatsApp from './whatsApp.svg'


function Footer() {
  return (
    <React.Fragment>
        <CssBaseline/>
        <footer className='footer'>
            <Container maxWidth='sm' style={{display:'flex',flexDirection:'column',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
                <Typography align='center'  style={{color:'#fff', fontSize:'18px', fontWeight:'bold',padding:'40px 0 10px 0'}}>
                    FIDO
                </Typography>
                <div className='divFooter'>
                    <img src={Instagram} className='iconosFooter' alt="" />
                    <img src={Facebook} className='iconosFooter' alt="" />
                    <img src={WhatsApp} className='iconosFooter' alt="" />

                </div>
                <hr className='lineaFooter'/>
                <Typography align='center' style={{color:'#fff'}}>© {new Date().getFullYear()} FIDO</Typography>
                <Typography align='center' style={{color:'#fff'}}>Todos los derechos reservados.</Typography>

            </Container>
            
        </footer>
    </React.Fragment>
  )
}

export default Footer
