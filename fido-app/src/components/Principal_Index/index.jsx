import React from 'react'
import Footer from '../Footer'
import Inicial_Header from '../Header/inicial_header'
import AppServices from '../AppServices'


function Principal_Index() {
  return (
    <React.Fragment>
      <Inicial_Header/>
      <AppServices/>
      <Footer/>
    </React.Fragment>
    
  )
}

export default Principal_Index
