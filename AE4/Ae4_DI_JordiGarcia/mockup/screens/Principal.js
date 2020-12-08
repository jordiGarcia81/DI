/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import  React,{ Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
 
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import{
  Header,
  Avatar,
  Input,
  Button,
  Card,
  Image,
 

}  
from 'react-native-elements';

import{
  icon,
  leftIcon,
}
from 'react-native-vector-icons';
import { Partido1 } from '../components/Partido1';
import { Partido2 } from '../components/Partido2';
import { Partido3 } from '../components/Partido3';



class  Principal extends Component {
    render(){
        return(

   
      <View style={styles.contenidor}>
        
        <View style={styles.contenidor}>
          <View style={styles.seccio1}>
          <Header placement="left"
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'PLACEMYBET', style: { color: '#fff' ,fontSize:25,textAlign:'center'} }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            containerStyle={{
            backgroundColor: '#008000',
            justifyContent: 'space-around',}}/>
            <ScrollView>
            <View>

              <Text></Text>
              <Text></Text>
            </View>
            
         <Partido1></Partido1>
         <View>
         <Button
          title="Apostar"
            />
            </View>
         <View>
              <Text></Text>
              <Text></Text>
            </View>
            <Partido2></Partido2>
            <View>
         <Button
          title="Apostar"
            />
            </View>
            <View>
              <Text></Text>
              <Text></Text>
            </View>
            <Partido3></Partido3>
            <View>
         <Button
          title="Apostar"
            />
            </View>
            </ScrollView>
        </View>
       </View>
     </View>
     
        );
    }
};

const styles = StyleSheet.create({
    contenidor: {
      flex: 1,
      
      flexDirection:'column',
      borderColor:'white',
      alignContent:'center',
      backgroundColor:'#0BAF17',
      
      
    },

    partidos:{
      flex: 1,
      flexDirection:'row',
      alignItems:'center',
      backgroundColor:'#00FF00',
      textAlign: 'center',
      borderWidth:3,
      justifyContent:'space-around'
      
      
    },
   
    seccio1: {
      flex:1,
      
      borderWidth:3,
      fontSize: 12,
      fontWeight: '600',
      margin: 4,
      textAlign: 'right',
      
      
    },
    
  });

export default Principal;