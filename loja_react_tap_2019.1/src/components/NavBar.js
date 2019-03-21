import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Badge from 'react-bootstrap/Badge';
import {LojaContext} from '../context/LojaContext';




class NavBar extends Component{
    render() {
        return(
          <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand><h2>Mais Livros</h2>
  
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav " />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link>Home</Nav.Link>
      <Nav.Link>Sobre</Nav.Link>
      <Nav.Link>Contato</Nav.Link>
      
      <NavDropdown title="Categoria" id="basic-nav-dropdown">
        <NavDropdown.Item>Informatica</NavDropdown.Item>
        <NavDropdown.Item>Juridico</NavDropdown.Item>
        <NavDropdown.Item>Agricultura</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <LojaContext.Consumer>
              {(context) => (
                <React.Fragment>
                  <Form inline>
                    <FormControl type="text" placeholder="Procurar" className="mr-sm-2" onChange={(event) => context.buscar(event.target.value)} />
                  </Form>
                  { (context.state.carrinho.length <= 0) ? '' : (
                    <Button variant="primary" onClick={context.mostrarCarrinho}>
                       <Badge variant="light">{context.state.carrinho.length}</Badge>
                    </Button>
                  ) }
                </React.Fragment>
              )}
            </LojaContext.Consumer>
            <NavDropdown title="Usuario logado" id="basic-nav-dropdown">
        <NavDropdown.Item>Perfil</NavDropdown.Item>
        <NavDropdown.Item>Configuração</NavDropdown.Item>
        <NavDropdown.Item></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>Sair</NavDropdown.Item>
      </NavDropdown>
  </Navbar.Collapse>
</Navbar>
  

        );

    }
}

export default NavBar;