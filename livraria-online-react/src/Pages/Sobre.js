import React, {Component} from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



class Sobre extends Component {
    render() {
        return (
          <Container className='justify-content-center'>
          <Row>
          <Col xs={2}></Col>
          <Col xs={8}>
        <Card className="text-rigth">
          <Card.Header as="h4"><Card.Title>Sobre</Card.Title></Card.Header>
          
          <Card.Body>
            <h1>Mais Livros</h1>
            <p>A Mais Livros.com, Inc. é uma empresa transnacional de comércio electrónico dos Estados Unidos, com sede em Seattle, estado de Washington. Foi uma das primeiras companhias com alguma relevância a vender produtos na Internet. Mais Livros inclui. Uma empresa do Grupo Cássio Corporation S/A</p>
            
          </Card.Body>
        </Card>
      </Col>
       <Col></Col>
       </Row>     
     </Container>     
        );
    }


}

export default Sobre;