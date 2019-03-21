import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




class Footer extends Component {
    render() {
        return (
            
              <footer bg="dark" >
        <div class="navbar navbar-inverse navbar-fixed-bottom" >
            <div class="container">
            <Row>
              <Col>1 of 3</Col>
              <Col>2 of 3</Col>
              <Col>3 of 3</Col>
            </Row>
               
            </div>
        </div>

</footer>
              
        )

    }

}

export default Footer;