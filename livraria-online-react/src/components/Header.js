import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import DemoCarousel from './DemoCarousel';




class Header extends Component{
    render() {
        return (
            <Jumbotron>
                
                <DemoCarousel/>
          
                
            </Jumbotron>

        );
    }


}

export default Header;