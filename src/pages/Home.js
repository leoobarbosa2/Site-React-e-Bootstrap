import React from 'react'
import Main from '../template/Main'

import './Home.css'

import Img1 from '../assets/grecia.jpg'
import Img2 from '../assets/london.jpg'
import Img3 from '../assets/time-square.jpg'

export default props =>
    <Main titulo="Bem vindo" subtitulo="Descubra mais sobre os paises que você pode conhecer pessoalmente">
       
        <div className="container mt-5">

            <div id="campo-cards" className="row mb-5">

                <div className="card-1 col-sm-4 mb-2">
                    <div className="card">
                        <img src={Img1} className="card-img-top rounded"/>
                        <div className="card-body">
                            <h4 className="card-title">New York</h4>
                            <h6 className="card-subtitle mb-2 text-muted">Lorem ipsum</h6>
                            <p className="card-text">It has survived not only five centuries, but also the leap into electronic typesetting </p>
                            <a href="#" className="card-link">Acessar</a>
                            <a href="#" className="card-link">Saiba mais</a>
                        </div>
                    </div>
                </div>
                <div className="card-2 col-sm-4">
                    <div className="card">

                        <img src={Img2} className="card-img-top"/>

                        <div className="card-body">
                            <h4 className="card-title">Grecia</h4>
                            <h6 className="card-subtitle mb-2 text-muted">Lorem ipsum</h6>
                            <p className="card-text">It has survived not only five centuries, but also the leap into electronic typesetting </p>
                            <a href="#" className="card-link">Acessar</a>
                            <a href="#" className="card-link">Saiba mais</a>
                        </div>

                    </div>
                </div>
                <div className="card-3 col-sm-4">
                    <div className="card">

                        <img src={Img3} className="card-img-top"/>

                        <div className="card-body">
                            <h4 className="card-title">Londres</h4>
                            <h6 className="card-subtitle mb-2 text-muted">Lorem ipsum</h6>
                            <p className="card-text">It has survived not only five centuries, but also the leap into electronic typesetting </p>
                            <a href="#" className="card-link">Acessar</a>
                                <a href="#" className="card-link">Saiba mais</a>
                        </div>
                    </div>
                </div>

            </div>
    </div>
    </Main>