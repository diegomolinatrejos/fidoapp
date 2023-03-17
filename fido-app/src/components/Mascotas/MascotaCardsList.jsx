import React, { useState } from 'react';
import './style.css';
import { Card, CardActions, CardContent, Button, Typography, Avatar } from '@mui/material';
import Modal from '../Modal/modal'
import styled from 'styled-components';

function MascotaList() {
  const [estadoModal, setEstadoModal]=useState(false);
  const [cards, setCards] = useState([{
    imgPet:'https://i.pinimg.com/564x/fa/f6/89/faf6893660ada52c7f49c755fcbb9b93.jpg',
    name:'Tyson',
    especie:'Perro',
    raza:'dachshund',
    castrado:'No',
    comportamiento:"",
    duennoNombre:'Keylor',
    duennoApellidos:'Gómez Rodríguez',
    telefono:'70757181',
    duennoNombre2:'Keylor',
    duennoApellidos2:'Gómez Rodríguez',
    telefono2:'70757181',
    direccion:'Grecia, Alajuela'
},{
    imgPet:'https://i.pinimg.com/564x/fa/f6/89/faf6893660ada52c7f49c755fcbb9b93.jpg',
    name:'Tyson',
    especie:'Perro',
    raza:'dachshund',
    castrado:'No',
    comportamiento:"",
    duennoNombre:'Keylor',
    duennoApellidos:'Gómez Rodríguez',
    telefono:'70757181',
    duennoNombre2:'Keylor',
    duennoApellidos2:'Gómez Rodríguez',
    telefono2:'70757181',
    direccion:'Grecia, Alajuela'
},{
    imgPet:'https://i.pinimg.com/564x/fa/f6/89/faf6893660ada52c7f49c755fcbb9b93.jpg',
    name:'Tyson',
    especie:'Perro',
    raza:'dachshund',
    castrado:'No',
    comportamiento:"",
    duennoNombre:'Keylor',
    duennoApellidos:'Gómez Rodríguez',
    telefono:'70757181',
    duennoNombre2:'Keylor',
    duennoApellidos2:'Gómez Rodríguez',
    telefono2:'70757181',
    direccion:'Grecia, Alajuela'
},{
    imgPet:'https://i.pinimg.com/564x/fa/f6/89/faf6893660ada52c7f49c755fcbb9b93.jpg',
    name:'Tyson',
    especie:'Perro',
    raza:'dachshund',
    castrado:'No',
    comportamiento:"",
    duennoNombre:'Keylor',
    duennoApellidos:'Gómez Rodríguez',
    telefono:'70757181',
    duennoNombre2:'Keylor',
    duennoApellidos2:'Gómez Rodríguez',
    telefono2:'70757181',
    direccion:'Grecia, Alajuela'
},{
    imgPet:'https://i.pinimg.com/564x/fa/f6/89/faf6893660ada52c7f49c755fcbb9b93.jpg',
    name:'Tyson',
    especie:'Perro',
    raza:'dachshund',
    castrado:'No',
    comportamiento:"",
    duennoNombre:'Keylor',
    duennoApellidos:'Gómez Rodríguez',
    telefono:'70757181',
    duennoNombre2:'Keylor',
    duennoApellidos2:'Gómez Rodríguez',
    telefono2:'70757181',
    direccion:'Grecia, Alajuela'
},{
    imgPet:'https://i.pinimg.com/564x/fa/f6/89/faf6893660ada52c7f49c755fcbb9b93.jpg',
    name:'Tyson',
    especie:'Perro',
    raza:'dachshund',
    castrado:'No',
    comportamiento:"",
    duennoNombre:'Keylor',
    duennoApellidos:'Gómez Rodríguez',
    telefono:'70757181',
    duennoNombre2:'Keylor',
    duennoApellidos2:'Gómez Rodríguez',
    telefono2:'70757181',
    direccion:'Grecia, Alajuela'
}]); 

  return (
    <React.Fragment>
      <div style={{ width: '100%' }}>
        <Button
          variant='contained'
          style={{
            margin: '0.5rem 0 1rem 1.5rem',
            backgroundColor: '#F1E4FF',
            color: '#8C30F5',
            fontWeight: 600,
            textTransform: 'none',
          }} onClick={()=>setEstadoModal(!estadoModal)}
        >
          Añadir mascota
        </Button>
      </div>
      <div className='cardsFlexMascotas'>
        <div className='cardBoxMascota'>
                {cards.map((card) => (
                <Card
                    key={card.id}
                    style={{
                    borderRadius: '1.2rem',
                    marginRight: '0.5rem',
                    marginBottom: '3rem',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)',
                    }}
                >
                    <CardContent style={{ padding: '0.6rem 0.7rem 0.2rem 0.7rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Avatar src={card.imgPet} sx={{ width: 150, height: 150 }} />
                    </div>

                    <Typography style={{ marginTop: '0.7rem', fontSize: '0.9rem' }}>
                        <strong>Nombre: </strong>
                        {card.name}
                    </Typography>
                    <Typography style={{ marginTop: '0.7rem', fontSize: '0.9rem' }}>
                        {card.duennoNombre} {card.duennoApellidos}
                    </Typography>
                    <Typography style={{ marginTop: '0.7rem', fontSize: '0.9rem' }}>{card.telefono}</Typography>
                    </CardContent>
                    <CardActions>
                    <Button
                        size='small'
                        style={{ color: '#8C30F5', backgroundColor: '#F1E4FF', fontWeight: 600, borderRadius: '0.5rem' }} onClick={()=>setEstadoModal(!estadoModal)}
                    >
                        Detalles
                    </Button>
                    </CardActions>
                </Card>
                ))}
            </div>
      </div>
      <Modal style={{zIndex:100}}
      estado={estadoModal} 
      modifcarEstadoModal={setEstadoModal}>
        <Contenido>
          <ContenidoIntermedio>
            <FotoPerfil>
              <h3>FOTO</h3>
            </FotoPerfil>
            <Formulario>
              <h4>Formulario</h4>
              <h4>Formulario</h4>
              <h4>Formulario</h4>
              <h4>Formulario</h4>
              <h4>Formulario</h4>
              <h4>Formulario</h4>
              <h4>Formulario</h4>
              <h4>Formulario</h4>
            </Formulario>
          </ContenidoIntermedio>
          <ContenidoIntermedio>
            <button>Editar</button>
            <button>Eliminar</button>
          </ContenidoIntermedio>

        </Contenido>
      </Modal>
      
    </React.Fragment>
  );
}

export default MascotaList;

const Contenido=styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items: center;
  width: 98%;

  @media only screen and (max-width: 465px) {
    display:flex;
    flex-wrap:wrap;
    justify-content:flex-start;
    align-items: center;
  }
`;
const ContenidoIntermedio=styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-evenly;
  align-items: center;
  @media only screen and (max-width: 465px) {
    display:flex;
    flex-wrap:wrap;
    justify-content:flex-start;
    align-items: center;
  }
`;
const FotoPerfil=styled.div`
  display:flex; 
  justify-content:center;
  align-items: center;
  width: 50%;
  margin:0.2rem 0.5rem 0.2rem 0.5rem;
`;
const Formulario=styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items: center;
  width: 50%;
  margin:0.2rem 0.5rem 0.2rem 0.5rem;
`;