import React, { Component } from 'react';
import { JogoContext } from '../context/JogoContext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';


class Container extends Component {
    render() {
        return (
            
            <Jumbotron>
                
                  
                        <Row>
                            
                                <Form inline> 
                                    <Form.Row inline>
                                        <Form.Group as={Col}>
                                            <Form.Label>Pontos</Form.Label>
                                            <Form.Control type="text" name="ponto" placeholder="informe o numero de pontos" />
                                        </Form.Group>
                                        <br/>

                                        <Form.Group as={Col}>
                                            <Form.Label>Lançamentos</Form.Label>
                                            <Form.Control type="text" name="lancamento" placeholder="Informe o numero de lançamento" />
                                        </Form.Group>
                                    </Form.Row>
                                    <JogoContext.Consumer>
                                    {(context) => (
                                         <Button variant="outline-primary" block onClick={() => context.jogar(this.props.ponto, this.props.lancameto)}>Jogar</Button>
                   )}
                                       
                                    </JogoContext.Consumer>
                                    
                                </Form>
                            
                        </Row>
                   
       
            </Jumbotron>
        )
    }
}

export default Container;

