import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';
import { Carousel } from 'react-responsive-carousel';
import carousel from '../img/livros.jpg';


class DemoCarousel extends Component {
    render (){
        return (
            <Container>
                <Row>
                    <Col sm={1}></Col>
                    <Col sm={10}>
                            <Carousel>
                <div>
                <img src={carousel} alt='Logo da aplicação' />
                    <p className="legend">Cada nova geração de computadores desmoraliza as antecedentes e seus criadores.
                       <br/> <small>Carlos Drummond de Andrade</small>
                    </p>
                </div>
                <div>
                <img src={carousel} alt='Logo da aplicação'/>
                    <p className="legend">Há homens e mulheres que fazem do casamento uma oportunidade de adultério.
                        <br/> <small>Carlos Drummond de Andrade</small>
                    </p>
                </div>
                <div>
                <img src={carousel} alt='Logo da aplicação'/>
                    <p className="legend">Os homens distinguem-se pelo que fazem; as mulheres, pelo que levam os homens a fazer.
                         <br/> <small>Carlos Drummond de Andrade</small>
                    </p>
                </div>
            </Carousel>
                      
                      
                      </Col>
                      <Col sm={1}></Col>
                </Row>
            </Container>
        );

    }
}

export default DemoCarousel;