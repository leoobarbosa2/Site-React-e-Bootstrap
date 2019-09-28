import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Servicos from './pages/Servicos'
import Contato from './pages/Contato'

export default class Routes extends Component {
    render(){
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path ="/sobre" component={Sobre} />
                <Route path="/servicos" component={Servicos} />
                <Route path="/contato" component={Contato} />
                <Redirect from="*" to ="/" />
            </Switch>
        )
    }
}