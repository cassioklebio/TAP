import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import imagem from '../img/livros.jpg';

class DetalheProduto extends Component {

    render() {
        return(
            <Container>
                <Row>
                    <Col sm={4}>
                    <Figure>
                        <Figure.Image width={171} height={180} alt="171x180"
                            src={imagem}/>
                        </Figure>
                    </Col>
                    <Col sm={8}>
                        <h2>Nome do livro</h2>
                        <small>Codigo</small><br/> 
                        <Button variant="outline-primary">
                            Adicionar ao carrinho
                        </Button>    
                      
                      
                    </Col>
                     
                </Row>
                <Row>
                    <Col sm={12}>
                        <h1>informações do produto</h1>
                        <hr/>
                        <ul>
                            <li>Codigo</li>
                            <li>Códig de barras</li>
                            <li>Editora</li>
                            <li>Nº de paginas</li>
                            

                        </ul>

                    </Col>
                </Row>
            </Container>
        );
    }

}

export default DetalheProduto;