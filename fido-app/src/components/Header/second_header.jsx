import React,{useState} from 'react'
import './style.css'
import { AppBar, Toolbar,CssBaseline, IconButton, Typography, Button, Paper, Drawer, Divider, Avatar} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';

function Logged_Header() {
    const navigate=useNavigate()
    const LogOut=()=>{
        navigate('/')
    }
    const indexPage=()=>{
        navigate('/app')
    }
    const [open, setOpen]=useState(false)

  return (
    <React.Fragment>
        <CssBaseline/>
        <AppBar color='default' className='AppBar'>
            <Toolbar>
                <IconButton edge='start' color='inherit' onClick={()=>setOpen(true)}>
                    <MenuOutlinedIcon />
                </IconButton>
                <PetsRoundedIcon className='petsIcon'/>
                <Typography style={{flexGrow:1,fontWeight:'bold', cursor:'pointer'}} onClick={()=>indexPage()}>
                    FIDO
                </Typography>
                <Button variant='text' style={{textTransform:'none', borderRadius:'1.3rem', color:'#8C30F5', fontSize:'1rem', fontWeight:'bold'}} onClick={()=>LogOut()}>Cerrar Sesión</Button>
                <IconButton style={{display:'none'}}>
                    <LogoutOutlinedIcon style={{color:'#8C30F5'}}/>
                </IconButton>
            </Toolbar>
            <div className='primaryContainer'>
                <div  className='AppServices'>
                <Button variant='text'color='inherit' style={{borderRadius:'1.2rem', textTransform:'none', margin:'0 1rem', fontWeight:'bold'}} autoFocus className='buttonServices'  >
                    Hotel
                </Button>
                <Button variant='text'color='inherit' style={{borderRadius:'1.2rem', textTransform:'none', margin:'0 1rem', fontWeight:'bold'}} className='buttonServices'  >
                    Grooming
                </Button>
                <Button variant='text'color='inherit' style={{borderRadius:'1.2rem', textTransform:'none', margin:'0 1rem', fontWeight:'bold'}} className='buttonServices'  >
                    Entrenamiento
                </Button>
                <Button variant='text'color='inherit' style={{borderRadius:'1.2rem', textTransform:'none', margin:'0 1rem', fontWeight:'bold'}} className='buttonServices'  >
                    Guardería
                </Button>
                <Button variant='text'color='inherit' style={{borderRadius:'1.2rem', textTransform:'none', margin:'0 1rem', fontWeight:'bold'}} className='buttonServices'  >
                    Veterinaria
                </Button>
                <Button variant='text'color='inherit' style={{borderRadius:'1.2rem', textTransform:'none', margin:'0 1rem', fontWeight:'bold'}} className='buttonServices'  >
                    Comida
                </Button>
                </div>
            </div>
        </AppBar>
        <Drawer anchor='left' open={open} onClose={()=>setOpen(false)}>
            <Paper elevation={0} style={{width:'150px',backgroundColor: '#75E3EA'}}>
                <div className='divSlideBar'>
                <IconButton edge='start' color='inherit' onClick={()=>setOpen(false)} >
                        <MenuOutlinedIcon/>
                    </IconButton>
                    <Avatar style={{marginLeft:'3.3rem'}} alt='' src=''/>
                </div>
                <Divider/>
            </Paper>
        </Drawer>
    </React.Fragment>
  )
}

export default Logged_Header
