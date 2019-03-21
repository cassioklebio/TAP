import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import noFound from '../img/404-page-not-found.jpg';

class PaginaNaoEncontrada extends Component {

    render(){
        return(
            <Container>
                    <img src={noFound} alt='Página Não Encontrada' width="100%" height="150%" />
            </Container>
        );
    }


}

export default PaginaNaoEncontrada;