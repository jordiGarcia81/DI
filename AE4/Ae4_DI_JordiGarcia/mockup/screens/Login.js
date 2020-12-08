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






class  Login extends Component {
    
    render(){
        return(

   
      <View style={styles.contenidor}>
        
        <View style={styles.contenidor}>
          <View style={styles.seccio1}>
          <Header placement="left"
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Login            PLACEMYBET', style: { color: '#fff' ,fontSize:20,textAlign:'center'} }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            containerStyle={{
            backgroundColor: '#008000',
            justifyContent: 'space-around',}}/>
            <View>
             <Text></Text>
            <Text></Text>
            </View >
            <ScrollView>
            <View>
            <Input 
    placeholder="Login"
    leftIcon={{ 
       name: "account-box",
       size: 25,
      color: "black"}}
    style={styles}
    onChangeText={value => this.setState({ comment: value })}
    />
             </View>
             <View>
             <Input 
   placeholder="Pasword"
   leftIcon={{  
     name: "https",
   size: 25,
  color: "black" }}
   style={styles}
   onChangeText={value => this.setState({ comment: value })}
   secureTextEntry={true} style={styles.default} value="abcdefghi" 
  />
             </View>
             <View>
                 <Text></Text>
             </View>
             <View>
    <Button
          title="Ingresar"
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

export default Login;