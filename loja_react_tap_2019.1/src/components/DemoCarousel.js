import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import carousel from '../img/livros.jpg';


class DemoCarousel extends Component {
    render (){
        return (
            <Carousel>
                <div>
                <img src={carousel} alt='Logo da aplicação' width="100%" height="150%" />
                    <p className="legend">Cada nova geração de computadores desmoraliza as antecedentes e seus criadores.
                       <br/> <small>Carlos Drummond de Andrade</small>
                    </p>
                </div>
                <div>
                <img src={carousel} alt='Logo da aplicação' width="100%" height="150%" />
                    <p className="legend">Há homens e mulheres que fazem do casamento uma oportunidade de adultério.
                        <br/> <small>Carlos Drummond de Andrade</small>
                    </p>
                </div>
                <div>
                <img src={carousel} alt='Logo da aplicação' width="100%" height="150%" />
                    <p className="legend">Os homens distinguem-se pelo que fazem; as mulheres, pelo que levam os homens a fazer.
                         <br/> <small>Carlos Drummond de Andrade</small>
                    </p>
                </div>
            </Carousel>
        );

    }
}

export default DemoCarousel;