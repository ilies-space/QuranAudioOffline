import React from 'react';
import {View, Text, FlatList, Button} from 'react-native';
export default function PlayList() {
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
    <View>
      <View style={{alignItems: 'center', margin: 10}}>
        <Text>Mulk - ahmed</Text>
      </View>

      {/* Audio INFO  */}

      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Button title={'like'} />

        <View
          style={{
            backgroundColor: 'gray',
            height: 150,
            width: 150,
            borderRadius: 150 / 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>IMG</Text>
        </View>
        <Button title={'menu'} />
      </View>

      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={QuranList}
        renderItem={({item}) => {
          return (
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
          );
        }}
      />
    </View>
  );
}
