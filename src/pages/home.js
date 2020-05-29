import React from 'react'
import ImagenHome from '../components/ImagenHome'
import CuerpoHome from '../components/CuerpoHome'
import Marcas from '../components/Marcas'
import Formulario from '../components/Formulario'
import Servicios from '../components/Servicios'
import Noticias from '../components/Noticias'
import styled from 'styled-components'
import fotoTaller from '../assets/img/lab3.jpg';
import fondo from '../assets/img/fondo.jpg'

const Transparente = styled.div `
  background: rgba(255, 255, 255, 0.4);
  background-image: url("${fondo}");
  background-position: center;
  background-attachment: fixed; 
  background-repeat: no-repeat; 
  background-size: cover;  
`
const FondoFoto = styled.div `
  background: rgba(255, 255, 255, 0.4);
  background-image: url("${fotoTaller}");
  background-position: center;
  background-attachment: fixed; 
  background-repeat: no-repeat; 
  background-size: cover;
`
const Shop = styled.div `
  background:white;
`

/*  El Home */
const Home = () => {

  return (
    
    <Transparente >
      <ImagenHome />
      <Shop id="my-store-29380059" />
      <Marcas />
      <FondoFoto>
        <Servicios />
        <Noticias />
        <CuerpoHome />
      </FondoFoto>
      <Formulario />  
    </Transparente>
  )
}


export default Home