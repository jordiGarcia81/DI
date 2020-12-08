/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import  React,{ Component } from 'react';

import { View ,  StyleSheet,Text, ScrollView} from 'react-native';
import{ Image,} from 'react-native-elements';

export class Partido1 extends Component{
    render(){
        return(
         
            <View style={styles.partidos}>
              
              <View style={{alignItems:'center'}}>
            <Image
  source={{ uri: 'https://assets.stickpng.com/thumbs/584ad186b519ea740933a89e.png'}}
  style={{ width: 130, height: 130, }}
/>
</View>
<View style={{alignSelf:'center'}}>
  <Text style={{ color: 'black', fontSize:27}}>VLC-BCN</Text>
</View>
<View style={{alignSelf:'flex-end'}}>
<Image
  source={{ uri: 'https://assets.stickpng.com/images/584a9b3bb080d7616d298777.png'}}
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