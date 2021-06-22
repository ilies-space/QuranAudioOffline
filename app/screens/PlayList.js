import React from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';
import { Colors } from '../theme/Colors';
import { NeomorphBlur,Neomorph } from 'react-native-neomorph-shadows';

export default function PlayList({navigation}) {
  const QuranList = [
    {
      surah: 'Fatiha',
      reader: 'Ahmed',
      playing: false,
    },
    {
      surah: 'Moulk',
      reader: 'Ahmed',
      playing: true,
    },
    {
      surah: 'Fatiha',
      reader: 'Ahmed',
      playing: false,
    },
    {
      surah: 'Moulk',
      reader: 'Ahmed',
      playing: false,
    },
    {
      surah: 'Fatiha',
      reader: 'Ahmed',
      playing: false,
    },
    {
      surah: 'Moulk',
      reader: 'Ahmed',
      playing: false,
    },
  ];
  return (
    <View style = {{
      flex:1,
      backgroundColor:Colors.white
    }}>
      <View style={{alignItems: 'center', margin: 10}}>
        <Text
        style ={{
          color:"gray"
        }}
        >Mulk - ahmed</Text>
      </View>

      {/* Audio INFO  */}

      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>

<NeomorphBlur
  style={{
    shadowRadius: 6,
    borderRadius: 35,
    backgroundColor: Colors.white,
    width: 70,
    height: 70,
  }}
>

<TouchableWithoutFeedback >
  <View
  style ={{
    alignItems:'center',
    justifyContent:'center',
    flex:1
  }}
  >
<Text>like</Text>

  </View>
</TouchableWithoutFeedback>
</NeomorphBlur>

        {/* <View
          style={{
            backgroundColor: 'gray',
            height: 150,
            width: 150,
            borderRadius: 150 / 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>IMG</Text>
        </View> */}

        <Neomorph
  inner // <- enable shadow inside of neomorph
  swapShadows // <- change zIndex of each shadow color
  style={{
    shadowRadius: 10,
    borderRadius: 150/2,
    backgroundColor: Colors.white,
    width: 150,
    height: 150,
  }}
>
<View style ={{
  alignItems:'center',
  justifyContent:'center',
  flex:1
}}>
<Text>IMG</Text>
</View>
  
</Neomorph>

        <NeomorphBlur
  style={{
    shadowRadius: 6,
    borderRadius: 35,
    backgroundColor: Colors.white,
    width: 70,
    height: 70,
  }}
>

<TouchableWithoutFeedback >
  <View
  style ={{
    alignItems:'center',
    justifyContent:'center',
    flex:1
  }}
  >
<Text>menu</Text>

  </View>
</TouchableWithoutFeedback>
</NeomorphBlur>

      </View>

      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={QuranList}
        renderItem={({item}) => {
          return (
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.push('Player');
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  padding: 10,
                }}>
                <View style={{flex: 1}}>
                  <Text> {item.surah} </Text>
                  <Text> {item.reader} </Text>
                </View>

                {item.playing ? (
                  <Button title={'PAUSE'} />
                ) : (
                  <Button title={'PLAY'} />
                )}
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
    </View>
  );
}
