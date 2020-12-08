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

}  
from 'react-native-elements';

import{
  icon,
  leftIcon,
}
from 'react-native-vector-icons';

/*const menu=()=>{
  return(
  <View>
  <Header placement="left"
      leftComponent={{ icon: 'menu', color: '#fff' }}
       centerComponent={{ text: 'Usuario             PLACEMYBET', style: { color: '#fff' } }}
       rightComponent={{ icon: 'home', color: '#fff' }}
       containerStyle={{
      backgroundColor: '#008000',
      justifyContent: 'space-around',}}/>
  </View>
  
  );
}*/

/*const perfil=()=>{
  return(
  <View >
    <Text></Text>
    <Text></Text>
    <Avatar 
    
    size="xlarge"
    source={{ uri:'https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg'}} />
  </View>

  );
}*/

/*const info=()=>{
  return(
    <View>
    <Text 
    style={{ color: 'black'}}
    >
    Información del usuario</Text>
    <View>
  <Button
  style={{ 
    backgroundColor:"green"}}
  icon={{
    name: "edit",
    size: 30,
    color: "white"
  }}
  title='Editar perfil de Usuario' type="solid" color='red'
  
  ></Button>
  </View>

<Text 
    style={{ color: 'black'}}
    >
    Cuenta:</Text>
    <View>
  <Button
  icon={{
    name: "person",
    size: 30,
    color: "white"
  }}
  title='Acceder a mi Cuenta' type="solid" color='red'
  
  ></Button>
  </View>
  <Text 
    style={{ color: 'black'}}
    >
    Historial:</Text>
    <View>
  <Button
  icon={{
    name: "equalizer",
    size: 30,
    color: "white"
  }}
  title='Acceder a mi Historial' type="solid" color='red'
  
  ></Button>
  </View>
  <Text 
    style={{ color: 'black'}}
    >
    Informes:</Text>
    <View>
  <Button
   icon={{
    name: "note",
    size: 30,
    color: "white"
  }}
  title='Acceder a informes' type="solid" color='red'
  
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
  );
}*/

import {Perfil} from './components/Perfil';
/*import{Salir} from './components/button/Button'*/

class App extends Component {
  render() {
    return (
      <ScrollView>
      <View style={styles.contenidor}>
        <View style={styles.contenidor}>
          <View style={styles.seccio1}>
          <Header placement="left"
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Usuario             PLACEMYBET', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            containerStyle={{
            backgroundColor: '#008000',
            justifyContent: 'space-around',}}/>
            <View style={styles.seccio2}>
            <Text></Text>
            <Text></Text>
            <Perfil></Perfil>
              </View>
              <View style={styles.seccio3}>
              <Text 
              style={{ color: 'black'}}
               >
              Información del usuario</Text>
            <View>
              <Button
              style={{ 
              backgroundColor:"green"}}
              icon={{
              name: "edit",
              size: 30,
              color: "white"
             }}
          title='Editar perfil de Usuario' type="solid" color='red'
  
           ></Button>
         </View>

        <Text 
          style={{ color: 'black'}}
        >
        Cuenta:</Text>
        <View>
      <Button
        icon={{
        name: "person",
        size: 30,
        color: "white"
         }}
      title='Acceder a mi Cuenta' type="solid" color='red'
  
       ></Button>
        </View>
          <Text 
            style={{ color: 'black'}}
           >
        Historial:</Text>
         <View>
           <Button
              icon={{
              name: "equalizer",
              size: 30,
              color: "white"
             }}
         title='Acceder a mi Historial' type="solid" color='red'
  
         ></Button>
        </View>
           <Text 
             style={{ color: 'black'}}
           >
           Informes:</Text>
         <View>
           <Button
           icon={{
            name: "note",
            size: 30,
            color: "white"
          }}
        title='Acceder a informes' type="solid" color='red'
  
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
        </View>
        </View>
     </View>
     </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  contenidor: {
    flex: 1,
    
    flexDirection:'column',
    borderColor:'white',
    alignContent:'center',
    backgroundColor:'green',
    
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
});

export default App;
