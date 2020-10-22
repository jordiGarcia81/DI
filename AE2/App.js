/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{ Component }  from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,

  
  
} from 'react-native';

import {
  //Header,
  //LearnMoreLinks,
  Colors,
 // DebugInstructions,
  //ReloadInstructions,
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
  //Icon,
  leftIcon,
}
from 'react-native-vector-icons';
//import { Icon } from 'react-native-vector-icons/Icon';


const App: () => React$Node = () => {
  return (
    <>
    <ScrollView>
      <Header placement="left"
      leftComponent={{ icon: 'menu', color: '#fff' }}
       centerComponent={{ text: 'EXERCICI DE JORDI', style: { color: '#fff' } }}
       rightComponent={{ icon: 'home', color: '#fff' }}/>
       <Image 
       source={{ uri: 'https://www.wallpaperup.com/uploads/wallpapers/2013/08/19/135949/00297a2528269ffcd01955cb6acb0a12.jpg' }}
      style={{ width: 400, height: 200 }} />
      <Avatar source={{ uri:'https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg'}} />
      <Input 
    placeholder="Login"
    leftIcon={{ type: 'font-awesome', name: 'Login' }}
    style={styles}
    onChangeText={value => this.setState({ comment: value })}
    />
   <Input 
   placeholder="Pasword"
   leftIcon={{ type: 'font-awesome', name: 'Pasword' }}
   style={styles}
   onChangeText={value => this.setState({ comment: value })}
   secureTextEntry={true} style={styles.default} value="abc" 
  />
  <Button
  title='Entrar...'  type="outline" color='white'
  
  buttonStyle={{borderBottomWidth: 4, borderColor: 'silver'}}
    />
    <Card>
          <Card.Title>2n DAM</Card.Title>
          <Card.Divider />
          <Card.Image
            source={{
              uri:
                'https://blogs.florida.es/floridauniversitariablog/wp-content/uploads/sites/19/2018/10/FLORIDA-UNIVERSITARIA.png',
            }}
          />
          <Text style={{marginTop: 10}}>
            Cicle Formatiu de Desenvolupament D'Aplicacions Multiplataforma
          </Text>
        </Card>
  </ScrollView>

  
  

       
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
