import './style.css'
import React from 'react'

function Navbar() {
    return (
        <>
            <nav>
                <a href="#" id="logo">Robinhood 
                <img src="images/logo2.png" alt="" width="20" height="20" /></a>
                <input type="checkbox" id='sidebar'/>
                <label htmlFor="sidebar" className='sidebarlevel'>
                    <div className="bar bar1"></div>
                    <div className="bar bar2"></div>
                </label>
               
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Product
                        <i class="fas fa-chevron-down"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Learn   
                        <i class="fas fa-chevron-down"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Support   
                        <i class="fas fa-chevron-down"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Who we are
                        <i class="fas fa-chevron-down"></i></a>
                    </li>
                </ul>
                <div className="register">
                    <a href="3" className="log">Log In</a>
                    <a href="#" className="sign">Sign Up</a></div>
            </nav>
        </>
    )
}

export default Navbar;
