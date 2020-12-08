/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import  React,{ Component } from 'react';


import{Button} from 'react-native-elements';
export class Salir extends Component{
    render(){
        return(
            <Button
            icon={{
           name: "clear",
          size: 40,
          color: "white"
           }}
        title='Cerrar sesión' type="solid" color='red'
    
         ></Button>
        );
        }

    };
