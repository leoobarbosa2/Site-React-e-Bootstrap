import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
    render(){
        return (
            <div id="rodape" className="bg-dark text-light">
                <div className="container py-0 py-lg-4">
                     <div className="row py-4">
                            <div className="col-12 col-md-6">
                                <h3>AeroDream</h3>
                            <hr/>
                                <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem  that a reader will be distracted by the readable content of a page when looking Ipsum is that it has a more-or-less normal distribution of letters</p>
                            </div>
                            <div className="col-12 col-md-3 py-2 py-md-0">
                                <h4>Links Internos</h4>
                                <ul>
                                    <li>
                                        Home
                                    </li>
                                    <li>
                                        Sobre
                                    </li>
                                    <li>
                                        Servicos
                                    </li>
                                    <li>
                                        Contato
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-3 py-2 py-md-0">
                                <h4>Social</h4>
                                <ul>
                                    <li>
                                        Facebook
                                    </li>
                                    <li>
                                        Instagram
                                    </li>
                                    <li>
                                        Twitter
                                    </li>
                                    <li>
                                        Linkedin
                                    </li>
                                </ul>
                            </div>
                     </div>
                </div>
                    <div className="bg-primary text-dark text-center py-1">
                        <p className="h5">Programação Web</p> 
                    </div>
            </div>
        )
    }
}