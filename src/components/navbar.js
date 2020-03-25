import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledNav = styled.nav`
/* Contenedor padre, es un <nav> */
display: flex;
justify-content: flex-end;
align-items: center;
position: fixed;
width: 100vw;
height: 93px;
padding: 15px;
background: rbga(0,0,0,0);
color: #FFFFFF;
z-index: 2;
font-size: 110%;
font-family: 'Neuton', serif;
/* ListaLink es el <ul> que con tiene todos los <li> */
.ListaLink{
  margin-right: 3%;
}
/* Estos son los li dentro de los <ul> */
.ListaLink li{
  display: inline-block;
  padding: 0px 3px;

}
/* .link son los <a> y <navlinks> dentro de los <Li> */
.link{
  color: white;
  transition: all 0.2s ease 0s;
  text-decoration: none;
  border-radius: 5px;
  padding: 10px 14px 12px;
  letter-spacing: 1px;
}
/* Efecto de fondo blanco en los items links */
.selected:hover{
  background-color: rgba(234, 241, 241, 0.3);
  color: #fff; 
}

/* Segunda clase que le di a los iconos de FB e Insta ya que tienen distintas dimensiones que las letras, asi que les ajusto el padding */
.icono{
  padding: 20px 10px 7px;
}
/* Clase del texto del logo para que este bien alineado a todo */
.title{
margin-left: 0;
margin-right: 26em;
cursor: default;
}

/* Div contenedor de la <img> con el logo */
.logo{
  padding: 5px;
  height: 5.1rem;;
  margin-right: -1em;  
  margin-left: 2em;
}
/* Ajusto la imagen para que tome el 100% tamaño del div contenedor */
.logo img {
    max-width: 100%;
    max-height: 100%;
  }
`

const Navbar = () => {
  return(
    <StyledNav>
      <div className="logo">
      <NavLink
          to="/"
          exact>
            <img src={require('../assets/img/logouno.png')} alt='logo'/>     
      </NavLink>
      </div>
      <ul className="ListaLink">
        <li>
          <span className="link title">Uno electromedicina</span>
        </li>
        <li>
          <NavLink
            to="/about"
            className="link selected">
              Sobre Nosotros
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="link selected">
              Contáctenos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/service"
            className="link selected">
              Servicio Técnico
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/productos"
            className="link selected">
              Productos
          </NavLink>
        </li>
        <li>
          <a
            href="https://www.instagram.com/unoelectromedicina/"
            target="_blank"
            rel="noopener noreferrer"
            className="link icono selected">
              <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
          </a>
        </li>  
        <li>
          <a
            href="https://www.facebook.com/uno.electromedicina/"
            target="_blank"
            rel="noopener noreferrer"
            className="link icono selected">
              <i class="fa fa-facebook-official fa-2x" aria-hidden="true" ></i>
          </a>
        </li>  
      </ul> 
    </StyledNav>
  )
}
export default Navbar