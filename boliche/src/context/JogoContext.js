import React, { Component } from 'react';


export const JogoContext = React.createContext();

export class JogoProvider extends Component {
    render(){
        return (
            <JogoContext.Provider value={{
                 jogar:{
                    
                
                 }        
                         
                         }}>
            </JogoContext.Provider>

        );
    }


}