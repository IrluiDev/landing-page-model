import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import '../css/Menu.css'
import {Link} from 'react-router-dom'
import Icon from '@material-ui/core/Icon'


function Menu() {
    return (
        // <Container>
            
            <div className="shadow container pb-sm-0 pb-2">
            <div className="row">
            <div className="col-lg-12">
                <Navbar collapseOnSelect expand="lg" fixed="top">
                    <Navbar.Brand>
                    <Link to="/">
                        Logo
                    </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="primero">
                        <Nav.Item>
                            <Link to="/">      
                                Home
                            </Link>
                            <Icon>star</Icon>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/contacto" href="contacto"> 
                                Contacto 
                            </Link>
                            <Icon> room</Icon>
                        </Nav.Item>
                        <NavDropdown title="Servicios" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                            <Nav.Item>
                                <Link to="/">      
                                    Mas
                                </Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            </div>
            </div>



/*             <div className="row">
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
            </div> */
        
        // </Container>
    )
}

export default Menu;