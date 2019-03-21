import React, { Component } from 'react';
import {LojaProvider} from '../context/LojaContext';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Footer from '../components/Footer';

import CarrinhoDeCompras from '../components/CarrinhoDeCompras';
import Routes from '../routers';




class Loja extends Component {
  render() {
    return (
      <LojaProvider>
             
            <NavBar/> 
            <Header/>
            <Routes/>            
            <CarrinhoDeCompras/>
           <Footer/>
      </LojaProvider>
        
    );
  }

 
}

export default Loja;