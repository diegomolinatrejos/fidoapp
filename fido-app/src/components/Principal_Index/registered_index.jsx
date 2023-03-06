import React from 'react'
import Footer from '../Footer'
import './style.css'
import Logged_Header from '../Header/second_header'
import AppServices from '../AppServices'
import CardList from '../Cards/CardList'
import { listHotels, listPromos,listGrooming, listEntrenamiento } from '../../assets/card-list'


function Registered_index() {
  return (
   <React.Fragment>
    <Logged_Header/>
    <AppServices/>
    <div style={{backgroundColor:'#75E3EA'}} className='PrincipalContainer'>
      <h2 style={{fontSize:'1.3rem'}}>Ofertas y promociones</h2>
      <CardList list={listPromos}/>
    </div>
    <div  className='PrincipalContainer' style={{backgroundColor:'#faebd7'}}>
      <h2 style={{fontSize:'1.3rem'}}>Hoteles</h2>
      <CardList list={listHotels}/>
    </div>
    <div  className='PrincipalContainer' style={{backgroundColor:'#FFC278'}}>
      <h2 style={{fontSize:'1.3rem'}}>Entrenamiento</h2>
      <CardList list={listEntrenamiento}/>
    </div>
    <div  className='PrincipalContainer' style={{backgroundColor:'#faebd7'}}>
      <h2 style={{fontSize:'1.3rem'}}>Grooming</h2>
      <CardList list={listGrooming}/>
    </div>
    <div  className='PrincipalContainer' style={{backgroundColor:'#F08080'}}>
      <h2 style={{fontSize:'1.3rem'}}>Veterinaria</h2>
      <CardList list={listGrooming}/>
    </div>
    <Footer/>
   </React.Fragment>
  )
}

export default Registered_index
