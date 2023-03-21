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
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
