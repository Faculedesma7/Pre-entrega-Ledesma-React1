import React from 'react'
import CartWidget from "./CartWidget"

function NavBar(background) {
  return (
    
    <header className={'header background--${background}'}>

        <div className='header-container'>

            <nav>
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Productos</a></li>
                    <li><a href="">Sobre Nosotros</a></li>
                </ul>
            </nav>

            <CartWidget />
        </div>
    </header>
  )
}

export default NavBar