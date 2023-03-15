import React, { useState } from 'react';
import './style.css';
import { Card, CardActions, CardContent, Button, Typography, Avatar } from '@mui/material';

function MascotaList() {
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
}]); // aquí iría tu lista de tarjetas

  return (
    <div>
      <div style={{ width: '100%' }}>
        <Button
          variant='contained'
          style={{
            margin: '0.5rem 0 1rem 1.5rem',
            backgroundColor: '#F1E4FF',
            color: '#8C30F5',
            fontWeight: 600,
            textTransform: 'none',
          }}
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
                        style={{ color: '#8C30F5', backgroundColor: '#F1E4FF', fontWeight: 600, borderRadius: '0.5rem' }}
                    >
                        Detalles
                    </Button>
                    </CardActions>
                </Card>
                ))}
            </div>
      </div>
      
    </div>
  );
}

export default MascotaList;
