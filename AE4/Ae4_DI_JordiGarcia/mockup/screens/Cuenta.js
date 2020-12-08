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
  Icon,
 
  
 

}  
from 'react-native-elements';

import{
  icon,
  leftIcon,
}
from 'react-native-vector-icons';




import { Caja } from '../components/Caja';


class  Cuenta extends Component {
    
    render(){
        return(

   
      <View style={styles.contenidor}>
         
        <View style={styles.contenidor}>
          <View style={styles.seccio1}>
          <Header placement="left"
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Cuenta           PLACEMYBET', style: { color: '#fff' ,fontSize:20,textAlign:'center'} }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            containerStyle={{
            backgroundColor: '#008000',
            justifyContent: 'space-around',}}/>
           <ScrollView>
            <View>
             <Text></Text>
            <Text></Text>
            </View >
            
            
            <View style={styles.seccio2}>
              
              <View style={{alignItems:'center'}}>
            <Text style={{ color: 'black', fontSize:20,}}>Modificar Cuenta: </Text>
</View>
<View style={{alignSelf:'center'}}>
<Icon
  name='create'
  color='black' />

</View>


</View>
<View>
    <Text style={{ color: 'black', fontSize:18,margin:20}}>Usuario</Text>
</View>
<View>
<Caja></Caja>
</View>
<View>
    <Text style={{ color: 'black', fontSize:18,margin:20}}>Contraseña</Text>
</View>
<View>
<Caja></Caja>
</View>
<View>
    <Text style={{ color: 'black', fontSize:18,margin:20}}>Email</Text>
</View>
<View>
<Caja></Caja>
</View>
<View style={styles.seccio2}>
              
              <View style={{alignItems:'center'}}>
            <Text style={{ color: 'black', fontSize:18,}}>Numero Tarjeta: </Text>
</View>
<View style={{alignSelf:'center'}}>
<Icon
  name='payment'
  color='black' />

</View>


</View>
<View>
<Caja></Caja>
</View>
<View>
    <Text style={{ color: 'black', fontSize:18,margin:20}}>CVV</Text>
</View>
<View>
<Caja></Caja>
</View>
<View>
    <Text style={{ color: 'black', fontSize:18,margin:20}}>Caducidad Tarjeta</Text>
</View>
<View>
<Caja></Caja>
</View>
<View>
    <Text style={{ color: 'black', fontSize:18,margin:20}}>Fecha de Nacimiento</Text>
</View>
<View>
<Caja></Caja>
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
      backgroundColor:'#00FF00',
      
      
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

      caja:{
         
        borderWidth: 3,
        backgroundColor:'white',
       
      },

      apuesta:{
        backgroundColor:'#A1C90D',
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
        flexDirection:'row',
      flex:1,
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

export default Cuenta;