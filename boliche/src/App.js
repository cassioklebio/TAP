import React, { Component } from 'react';
import Header from './components/Header';
import Container from './components/Container';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header/>
         <Container/>
        
      </div>
    );
  }
}

export default App;
