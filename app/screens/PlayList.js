import React from 'react';
import {View, Text, FlatList, Button} from 'react-native';
export default function PlayList() {
  const QuranList = [
    {
      surah: 'Fatiha',
      reader: 'Ahmed',
    },
    {
      surah: 'Moulk',
      reader: 'Ahmed',
    },
    {
      surah: 'Fatiha',
      reader: 'Ahmed',
    },
    {
      surah: 'Moulk',
      reader: 'Ahmed',
    },
    {
      surah: 'Fatiha',
      reader: 'Ahmed',
    },
    {
      surah: 'Moulk',
      reader: 'Ahmed',
    },
  ];
  return (
    <View>
      <Text>PlayList</Text>
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
              <Button title={'Play'} />
            </View>
          );
        }}
      />
    </View>
  );
}
