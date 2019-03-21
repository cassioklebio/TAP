import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



class Login extends Component {
    render() {
        return (
          <Container className='justify-content-center'>
          <Row>
          <Col xs={2}></Col>
          <Col xs={8}>
        <Card className="text-rigth">
          <Card.Header as="h4"><Card.Title>Login</Card.Title></Card.Header>
          
          <Card.Body>
            
            <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Entrar
            </Button>
          </Form>
          </Card.Body>
        </Card>
      </Col>
       <Col></Col>
       </Row>     
     </Container>     
        );
    }


}

export default Login;