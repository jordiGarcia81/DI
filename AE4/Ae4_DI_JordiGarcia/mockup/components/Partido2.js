/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import  React,{ Component } from 'react';

import { View ,  StyleSheet,Text} from 'react-native';
import{ Image} from 'react-native-elements';

export class Partido2 extends Component{
    render(){
        return(
            <View style={styles.partidos}>
              <View style={{alignItems:'center'}}>
            <Image
  source={{ uri: 'https://comprarpegatinas.com/images/stories/virtuemart/product/pegatinas/Real_Madrid_CF.png'}}
  style={{ width: 130, height: 130, }}
/>
</View>
<View style={{alignSelf:'center'}}>
  <Text style={{ color: 'black', fontSize:27}}>RM-ATL</Text>
</View>
<View style={{alignSelf:'flex-end'}}>
<Image
  source={{ uri: 'https://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/42.png'}}
  style={{ width: 130, height: 130 }}
/>
</View>

</View>
        );
        }

    };

    const styles = StyleSheet.create({
        
    
        partidos:{
          flex: 1,
          flexDirection:'row',
          alignItems:'center',
          backgroundColor:'#00FF00',
          textAlign: 'center',
          borderWidth:3,
          justifyContent:'space-between',
          
          
        },
       
       
      });