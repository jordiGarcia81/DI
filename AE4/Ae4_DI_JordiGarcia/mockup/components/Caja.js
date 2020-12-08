/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import  React,{ Component } from 'react';
import { View, StyleSheet} from 'react-native';
import{Input} from 'react-native-elements';

export class Caja extends Component{
    render(){
        return(
            
            <Input style={styles.caja }></Input>
           
        );
        }

    };

    const styles = StyleSheet.create({
        
    
          caja:{
             
            borderWidth: 3,
            backgroundColor:'white',
           
          },
    
        
      });