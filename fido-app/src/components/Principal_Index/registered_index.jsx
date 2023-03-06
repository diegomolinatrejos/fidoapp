import React from 'react'
import Footer from '../Footer'
import Logged_Header from '../Header/second_header'
import AppServices from '../AppServices'

function Registered_index() {
  return (
   <React.Fragment>
    <Logged_Header/>
    <AppServices/>
    <Footer/>
   </React.Fragment>
  )
}

export default Registered_index
