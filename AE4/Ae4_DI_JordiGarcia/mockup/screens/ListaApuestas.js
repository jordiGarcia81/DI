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
  CheckBox,
 
  
 

}  
from 'react-native-elements';

import{
  icon,
  leftIcon,
}
from 'react-native-vector-icons';






class ListaApuestas extends Component {
    
    render(){
        return(

   
      <View style={styles.contenidor}>
        
        <View style={styles.contenidor}>
          <View style={styles.seccio1}>
          <Header placement="left"
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text:'Lista Apuestas PLACEMYBET', style: { color: '#fff' ,fontSize:20,textAlign:'center'} }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            containerStyle={{
            backgroundColor: '#008000',
            justifyContent: 'space-around',}}/>
            <ScrollView>
            <View>

             <Text></Text>
            <Text></Text>

            </View >
        <View >
        <View>
            <Text style={{ color: 'black', fontSize:20, textAlign:'center'}}>Apuestas Realizadas</Text>
        </View>
        <View>

            <Text></Text>
            <Text></Text>

        </View >
        <View style={styles.partidos}>
          <View>
        <Text>Numero de Apuesta</Text>
        </View>
  
        <View>
        <Text >Tipo Apuesta</Text>
        </View>
        <View>
        <Text>Tipo Mercado</Text>
        </View>
        
       </View>

       <View style={styles.partidos}>
         <View>
         <CheckBox
  title='1'
  
/>
         </View>
         <View>
         <Text style={{ color: 'black', fontSize:15, textAlign:'center'}}>Over</Text>
         </View>
         <View>
         
           <Text style={{ color: 'black', fontSize:15, textAlign:'center'}}>1,5</Text>
         
         </View>

       </View>


       <View style={styles.partidos}>
         <View>
         <CheckBox
  title='2'
  
/>
         </View>
         <View>
         <Text style={{ color: 'black', fontSize:15, textAlign:'center'}}>Under</Text>
         </View>
         <View>
         
           <Text style={{ color: 'black', fontSize:15, textAlign:'center'}}>2,5</Text>
         
         </View>

       </View>

       

       <View style={styles.partidos}>
          
        <View>
        <Text>Dinero Apostado</Text>
        </View>
        <View>
        <Text>Fecha Apuesta</Text>
        </View>
        <View>
        <Text>Usuario</Text>
        </View>
       </View>


       <View style={styles.partidos}>
         <View>
         <CheckBox
  title='100'
  
/>
         </View>
         <View>
         <Text style={{ color: 'black', fontSize:15, textAlign:'center'}}>05/12/2020</Text>
         </View>
         <View>
         
           <Text style={{ color: 'black', fontSize:15, textAlign:'center'}}>jordigarcia@gmail.com</Text>
         
         </View>

       </View>


       <View style={styles.partidos}>
         <View>
         <CheckBox
  title='50'
  
/>
         </View>
         <View>
         <Text style={{ color: 'black', fontSize:15, textAlign:'center'}}>04/12/2020</Text>
         </View>
         <View>
         
           <Text style={{ color: 'black', fontSize:15, textAlign:'center'}}>jordigarcia@gmail.com</Text>
         
         </View>

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
        justifyContent:'space-around',
        justifyContent:'space-between',
       
        
        
        
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

export default ListaApuestas;