import React from 'react'
import Footer from '../Footer'
import './style.css'
import Logged_Header from '../Header/second_header'
import AppServices from '../AppServices'
import CardsApp from '../Cards/CardsApp'


function Registered_index() {
  return (
   <React.Fragment>
    <Logged_Header/>
    <AppServices/>
    <CardsApp/>
    <Footer/>
   </React.Fragment>
  )
}

export default Registered_index
