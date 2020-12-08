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


import {Perfil} from '../components/Perfil';

class  MenuPrincipal extends Component {
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
            <View style={styles.seccio2}>
               <Perfil></Perfil>
              </View>
              <View style={styles.seccio3}>
              <View>
              <Button
              style={{ 
              backgroundColor:"green"}}
              icon={{
              name: "person",
              
              size: 30,
              color: "white"
             }}
          title='Login' type="solid" color='red'
          
           ></Button>
         </View>
         <View>
             <Text></Text>
         </View>
         <View >
      <Button
        icon={{
        name: "edit",
        size: 30,
        color: "white"
         }}
      title='Registro' type="solid" color='red'
  
       ></Button>
        </View>
        <View>
          <Text></Text>
          </View>
             <View>
           <Button
              icon={{
              name: "equalizer",
              size: 30,
              color: "white"
             }}
         title='Informes' type="solid" color='red'
  
         ></Button>
        </View>
        <View>
           <Text></Text>
           </View> 
         <View>
           <Button
           icon={{
            name: "note",
            size: 30,
            color: "white"
          }}
        title='Apuestas' type="solid" color='red'
  
        ></Button>
         </View>
          <Text></Text>
         <Text></Text>
        <Text 
          style={{ color: 'black'}}
         >
        </Text>
      <View>
        <Button
          icon={{
         name: "clear",
        size: 40,
        color: "white"
         }}
      title='Cerrar sesión' type="solid" color='red'
  
       ></Button>
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

export default MenuPrincipal;