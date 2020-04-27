import React from 'react'
import RightMenu from './RightMenu'

function Navbar() {
    return (
        <section id="navbar" className="navbar" >
        <div className="nav-container">
           
           <div class="logo"><a href="#">Imigrant Management System</a></div>
           <RightMenu />
          
        </div>
        </section>
    )
}

export default Navbar
