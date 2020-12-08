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


class  Apuestas extends Component {
    
    render(){
        return(

   
      <View style={styles.contenidor}>
        
        <View style={styles.contenidor}>
          <View style={styles.seccio1}>
          <Header placement="left"
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Apuestas            PLACEMYBET', style: { color: '#fff' ,fontSize:20,textAlign:'center'} }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            containerStyle={{
            backgroundColor: '#008000',
            justifyContent: 'space-around',}}/>
            <ScrollView>
            <View>

             <Text></Text>
            <Text></Text>

            </View >
        <View style={styles.apuesta}>
        
    
    
        <View>
    <Partido1></Partido1>
    </View>
    <View>
        <Text></Text>
    </View>
    <View>
    <Button
          title="Over"
            />
    </View>
    <View>
        <Text></Text>
    </View>
    <View>
    <Button
          title="Under"
            />
    </View>
    <View>
        <Text></Text>
    </View>
    <View>
        <Text style={{ color: 'black', fontSize:20,margin:10}}>Añadir Cantidad:</Text>
    </View>
    <View>
   
    <Input style={styles.caja }>0</Input>


    </View>
    <View>
    <Button
          title="Confirmar Apuesta"
            />   
    </View>
    
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

      apuesta:{
        backgroundColor:'#A1C90D',
      },
      caja:{
         
        borderWidth: 3,
        backgroundColor:'white',
       
      },

   
    seccio1: {
      flex:1,
      
      borderWidth:3,
      fontSize: 12,
      fontWeight: '600',
      margin: 4,
      textAlign: 'right',
      
      
    },
    seccio2: {
      flex:0,
      borderColor:'#00FF00',
      borderWidth:3,
      fontSize: 12,
      fontWeight: '200',
      margin: 4,
      padding: 12,
      textAlign: 'center',
      justifyContent:'center',
      alignItems :'center',
      backgroundColor:'#00FF00',
      
      
    },  
    seccio3: {
      flex:1,
      borderColor:'#00FF00',
      borderWidth:3,
      fontSize: 12,
      fontWeight: '600',
      margin: 4,
      padding: 12,
      textAlign: 'left',
      backgroundColor:'#00FF00',
    },
    seccio4: {
      flex:1,
      borderColor:'#00FF00',
      borderWidth:3,
      fontSize: 12,
      fontWeight: '600',
      margin: 4,
      padding: 12,
      textAlign: 'left',
      backgroundColor:'#00FF00',
    },
  });

export default Apuestas;