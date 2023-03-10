import React,{useState} from 'react'
import {Box} from '@mui/material'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

function ListaSlideBar() {
    const [openProfile, setOpenProfile] = React.useState(false);
    const [openNegocio, setOpenNegocio] = React.useState(false);

  const handleClickProfile = () => {
    setOpenProfile(!openProfile);
  };
  const handleClickNegocio = () => {
    setOpenNegocio(!openNegocio);
  };
  return (
    <List
    sx={{ width: '100%', maxWidth: '220px', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader sx={{fontWeight:'bold'}} component="div" id="nested-list-subheader">
          Menú
        </ListSubheader>
      }
    >
        <ListItemButton onClick={handleClickProfile}>
        <ListItemIcon>
            <AccountCircleRoundedIcon sx={{ fontSize: '25px'}}/>
        </ListItemIcon>
        <ListItemText primaryTypographyProps={{ style: { fontSize: '0.7rem' } }}  primary="Gestionar cuenta" />
        {openProfile ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openProfile} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
                <EditRoundedIcon sx={{ fontSize: '20px'}} />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ style: { fontSize: '0.7rem' } }}  primary="Editar perfil" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
                <AddCircleOutlineRoundedIcon sx={{ fontSize: '20px'}} />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ style: { fontSize: '0.7rem' } }}  primary="Añadir mascota" />
            </ListItemButton>
        </List>
        </Collapse>

        <ListItemButton onClick={handleClickNegocio}>
        <ListItemIcon>
            <StoreRoundedIcon sx={{ fontSize: '25px'}}/>
        </ListItemIcon>
        <ListItemText primaryTypographyProps={{ style: { fontSize: '0.7rem' } }}  primary="Gestionar negocio" />
        {openNegocio ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openNegocio} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
                <AppRegistrationRoundedIcon sx={{ fontSize: '20px'}} />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ style: { fontSize: '0.7rem' } }}  primary="Editar negocio" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
                <ReceiptRoundedIcon sx={{ fontSize: '20px'}} />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ style: { fontSize: '0.7rem' } }}  primary="Gestión de promociones" />
            </ListItemButton>
        </List>
        </Collapse>
        <Box sx={{ position: 'fixed', bottom: 0, left: 0, width: '220px', marginBottom: 1 }}>
        <ListItemButton>
            <ListItemIcon>
                <LogoutRoundedIcon sx={{ fontSize: '20px'}} />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ style: { fontSize: '0.8rem' } }} primary="Cerrar sesión" />
        </ListItemButton>

        </Box>

    </List>
  )
}

export default ListaSlideBar
