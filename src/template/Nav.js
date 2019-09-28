import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
    render(){
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container">

                <Link className="navbar-brand h1 mb-0" to="/">AeroDream</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
            <div className="collapse navbar-collapse mr-auto" id="conteudoNavbarSuportado">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/sobre">Sobre</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contato">Contato</Link>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <a href="" className="nav-link dropdown-toggle" data-toggle="dropdown" id="navDrop">Nosso Trabalho</a>
                    <div className="dropdown-menu">
                        <Link  className="dropdown-item" to="/servicos">Servicos</Link>
                    </div>

                    </li>
                </ul>

                <form className="d-none d-lg-block form-inline">
                    <input id="inputSearch" className="form-control ml-4 mr-1" type="search" placeholder="Buscar..." />
                    <button className="btn btn-primary" type="submit" /*onClick="buscar()"*/>Ok</button>
                </form>

                </div>

            </div>

        </nav>
        )
    }
}