import React, {Component } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



class Contato extends Component {
    render() {
        return (
          <Container className='justify-content-center'>
          <Row>
          <Col xs={2}></Col>
          <Col xs={8}>
        <Card className="text-rigth">
          <Card.Header as="h4"><Card.Title>Contato</Card.Title></Card.Header>
          
          <Card.Body>
            <h1>Mais Livros</h1>
            <p><small>Desenvolvedor:</small>Cássio Klebio Pereira Lins<br/>
                <small>Fone:</small>(83) 99126-2410<br/>
                <small>E-mail</small>cassiotr2009@gmail.com            
            </p>
            
            
          </Card.Body>
        </Card>
      </Col>
       <Col></Col>
       </Row>     
     </Container>     
        );
    }


}

export default Contato;

