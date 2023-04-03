import React, {Suspense} from 'react'
import './App.css'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Principal_Index  from './components/Principal_Index'
import Login from './components/Login'
import Registered_index from './components/Principal_Index/registered_index'
import CrearRegistroRapido from './components/RegistroRapido/crearRegistroRapido'
import Mascotas from './components/Mascotas'
import ServiciosNegocio from './components/Servicios'
import PerfilUsuario from './components/Perfil/perfilUsuario'
import ReservasUsuario from './components/Reservaciones/reservasUsuario'
import ReservasNegocio from './components/Reservaciones/reservasNegocio'
import ClientsList from './components/Administration/clientsList'
import BusinessList from './components/Administration/businessList'
import GestionPromociones from './components/GestionPromociones/GestionPromociones'
import RegistrarNegocio from './components/RegistrarNegocio/registrarNegocio'
import ReservationPage from './components/ResrvationPage/reservationPage'
import PerfilNegocio from './components/Perfil/perfilNegocio'


const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path='/' name='index'element={<Principal_Index/>} />
          <Route path='/login' name='login' element={<Login/>} />
          <Route path='/app' name='logged-indez' element={<Registered_index/>} />
          <Route path='/registrar' name='registrar' element={<CrearRegistroRapido/>}/>
          <Route path='/pets' name='pets' element={<Mascotas/>}/>
          <Route path='/servicios-negocio' name='servicios' element={<ServiciosNegocio/>}/>
          <Route path='/perfil-usuario' name='perfil' element={<PerfilUsuario/>}/>
          <Route path='/reservas-usuario' name='reservas-usuarios' element={<ReservasUsuario/>}/>
          <Route path='/reservas-negocio' name='reservas-negocios' element={<ReservasNegocio/>}/>
          <Route path='/clientes-asociados' name='reservas-asociado-cliente' element={<ClientsList/>}/>
          <Route path='/negocios-asociados' name='reservas-asociado-negocio' element={<BusinessList/>}/>
          <Route path='/promocion-noticias' name='promocion-noticias' element={<GestionPromociones/>}/>
          <Route path='/registrar-negocio' name='registro-negocio' element={<RegistrarNegocio/>}/>
          <Route path='/reservar-servicio' name='reservar-servicio' element={<ReservationPage/>}/>
          <Route path='/perfil-negocio' name='perfil-negocio' element={<PerfilNegocio/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
