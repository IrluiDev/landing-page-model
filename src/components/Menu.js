import React from 'react';
import '../css/Menu.css'
import {Link} from 'react-router-dom'
import Icon from '@material-ui/core/Icon'


function Menu() {
    return (
        <div className="Barra shadow pb-sm-0">
            <div className="row">
                <div className="col-me-12 bg-dark">  
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                    <Link to="/" className="navbar-brand order-0 order-lg-0 me-auto
                                me-lg-0" href="/">
                                    Logo</Link>
                            <button className="navbar-toggler shadow  rounded-3"
                                    type="button" data-toggle="collapse" data-target="#navbarCollapse"
                                    aria-controls="navbarCollapse" aria-expanded="false" aria-level="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-between 
                                     p-0 sidebar rounded-3"   id="navbarCollapse">
                                <ul className="navbar-nav justify-content-between 
                                            align-content-center mb-lg-0">   
                                    <li className="nav-item active">
                                        <Icon>star</Icon>
                                        <Link to="/" className="nav-link px-lg-2">      
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Icon className="material-icons">room</Icon>
                                        <Link to="/contacto" className="nav-link px-lg-2" href="contacto"> 
                                         Contacto</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Icon className="material-icons">other_houses</Icon> 
                                        <Link to="/servicios" className="nav-link dropdown-toggle px-lg-2 
                                            fas fa-seedling" data-toggle="dropdown" id="navbarDropdown"
                                            role="button" aria-expanded="false" 
                                            id="navbardrop" href="servicios"> 
                                            Servicios
                                        </Link>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link to="/" className="dropdown-item"> Desarrollo Web</Link>
                                            <Link to="/" className="dropdown-item"> Marketing</Link>
                                            <hr className="dropdown-divider"></hr>
                                            <a href="#" className="dropdown-item"> Hosting y Dominio</a>
                                        </div>
                                    </li>
                                </ul> 
                            </div>    
                    </div>
                </nav>
                </div>
            </div>
        </div>
        
/*         <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">        
                <div className="navbar navbar-expand-lg fixed-top">
                        <div className="container-fluid">
                            <a href="#" className="navbar-brand order-0 order-lg-0 me-auto me-lg-0">Logo</a>
                            <button className="navbar-toggler shadow  rounded-3"
                                    type="button" data-toggle="collapse" data-target="#navbarCollapse"
                                    aria-controls="navbarCollapse" aria-expanded="false" aria-level="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="order-lg-0 text-center justify-content-between d-lg-flex collapse navbar-collapse
                                    shadow rounded-3 p-0 m-0"   id="navbarCollapse">
                                <ul className="navbar-nav justify-content-between 
                                            align-content-center mb-lg-0">   
                                    <li className="nav-item active">
                                        <a href="#" clas="nav-link px-lg-2 fas fa-MaterialIcon"> 
                                        Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" clas="nav-link px-lg-2 fas fa-map-marker-alt"> 
                                        Contacto</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a href="#" clas="nav-link dropdown-toggle px-lg-2 
                                            fas fa-seedling" data-toggle="dropdown" id="navbarDropdown"
                                            role="button" aria-expanded="false" 
                                            id="navbardrop"> Servicios</a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a href="#" className="dropdown-item"> Desarrollo Web</a>
                                            <a href="#" className="dropdown-item"> Marketing</a>
                                            <hr className="dropdown-divider"></hr>
                                            <a href="#" className="dropdown-item"> Hosting y Dominio</a>
                                        </div>
                                    </li>
                                </ul> 
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div> */
    )
}

export default Menu;