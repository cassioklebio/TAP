import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import logo from '../img/bola.png' ;
class Header extends Component {
    render() {
        return (
            <Jumbotron>
                   <div className="App-header">
                        <img src={logo} className="App-logo"/>
                        <h2>Jogo de Boliche</h2>

                    </div>
            </Jumbotron>
        )
    }
}

export default Header;