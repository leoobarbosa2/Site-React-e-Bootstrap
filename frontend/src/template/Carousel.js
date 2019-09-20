import React, { Component } from 'react'
import Img1 from '../assets/pessoas.jpg'
import Img2 from '../assets/clouds.jpg'
import Img3 from '../assets/asa.jpg'

import './Carousel.css'

export default class Header extends Component {
    render(){
        return (
            <div id="carouselSite" className="carousel slide carousel-fade" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselSite" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselSite" data-slide-to="1"></li>
                    <li data-target="#carouselSite" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-block" src={Img1} alt="Primeiro Slide" />
                    <div className="carousel-text carousel-caption">
                        <h3>Passagens Aereas</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore numquam id porro nulla odio eius illo debitis modi nemo omnis veniam labo.</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block " src={Img2} alt="Segundo Slide" />
                    <div className="carousel-text carousel-caption">
                        <h3>Melhores precos</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore numquam id porro nulla odio eius illo debitis modi nemo omnis veniam labo.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block " src={Img3} alt="Terceiro Slide"/>
                    <div className="carousel-text carousel-caption">
                        <h3>Viagens Internacionais</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore numquam id porro nulla odio eius illo debitis modi nemo omnis veniam labo.</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselSite" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Anterior</span>
                </a>
                <a className="carousel-control-next" href="#carouselSite" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Próximo</span>
                </a>
        </div>
       
        )
    }
}