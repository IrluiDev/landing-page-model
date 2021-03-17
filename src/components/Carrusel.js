import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../css/Carrusel.css';
import {Link} from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import Imagen1 from '../img/bebe1.jpg';
import Imagen2 from '../img/bebe2.jpg';
import Imagen3 from '../img/bebe3.jpg';
import Imagen4 from '../img/paisaje.jpeg';

function Carrusel() {
    return (
        <div className="container-fluid pt-5">
{/*             <div className="row">
                <div className="col-me-12 bg-dark">  */} 
                <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Imagen1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Imagen2}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Imagen3}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Imagen4}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
{/*             </div>
        </div> */}
    </div>
    )
}

export default Carrusel;