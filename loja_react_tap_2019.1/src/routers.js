import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DetalheProduto from './Pages/DetalheProduto';
import Login from './Pages/Login';

import PaginaNaoEncontrada from './Pages/PaginaNaoEncontrada';
import ListaDeProdutos from './Pages/ListaDeProdutos';
import Sobre from './Pages/Sobre';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component = {ListaDeProdutos}/>
            <Route path="/Detalhe" exact component = {DetalheProduto}/>
            <Route path="/Login" exact component = {Login}/>
            <Route path="/Sobre" exact component = {Sobre}/>
            <Route component ={PaginaNaoEncontrada}/>

        </Switch>
    </BrowserRouter>
);

export default Routes;