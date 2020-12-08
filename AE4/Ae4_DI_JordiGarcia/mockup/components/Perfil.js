/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import  React,{ Component } from 'react';
import { View } from 'react-native';
import{Avatar} from 'react-native-elements';

export class Perfil extends Component{
    render(){
        return(
            
        <Avatar 
            size="xlarge"
            source={{ uri:'https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg'}} />
           
        );
        }

    };

