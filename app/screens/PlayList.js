import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import {Colors} from '../theme/Colors';
import {NeomorphBlur, Neomorph} from 'react-native-neomorph-shadows';
import Play from '../assets/Icons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function PlayList({navigation}) {
  const [selectedAudio, setselectedAudio] = useState({
    surah: '',
    reader: '',
  });
  const QuranList = [
    {
      surah: 'Fatiha',
      reader: 'Ahmed',
      playing: false,
    },
    {
      surah: 'baqara',
      reader: 'Ahmed',
      playing: true,
    },
    {
      surah: 'ikhlas',
      reader: 'Ahmed',
      playing: false,
    },
    {
      surah: 'rahman',
      reader: 'Ahmed',
      playing: false,
    },
    {
      surah: 'insan',
      reader: 'Ahmed',
      playing: false,
    },
    {
      surah: 'Moulk',
      reader: 'Ahmed',
      playing: false,
    },

    {
      surah: 'Jin',
      reader: 'Ahmed',
      playing: false,
    },
    {
      surah: 'safat',
      reader: 'Ahmed',
      playing: true,
    },
    {
      surah: 'qadr',
      reader: 'Ahmed',
      playing: false,
    },
    {
      surah: 'ikhlass',
      reader: 'Ahmed',
      playing: false,
    },
    {
      surah: 'zilzal',
      reader: 'Ahmed',
      playing: false,
    },
    {
      surah: 'chams',
      reader: 'Ahmed',
      playing: false,
    },
  ];

  const phonewidth = Dimensions.get('window').width;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
      <View style={{alignItems: 'center', margin: 10}}>
        <Text
          style={{
            color: 'gray',
            marginVertical: 10,
          }}>
          {selectedAudio.surah} - {selectedAudio.reader}
        </Text>
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
          }}>
          <TouchableWithoutFeedback
            onPress={() => {
              console.log('LIKE');
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}>
              <AntDesign name="heart" size={18} color={Colors.gray} />
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
            borderRadius: 150 / 2,
            backgroundColor: Colors.white,
            width: 150,
            height: 150,
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <Image
              source={require('../assets/quranimg.jpg')}
              style={{
                height: 130,
                width: 130,
                borderRadius: 60,
              }}
            />
          </View>
        </Neomorph>

        <NeomorphBlur
          style={{
            shadowRadius: 6,
            borderRadius: 35,
            backgroundColor: Colors.white,
            width: 70,
            height: 70,
          }}>
          <TouchableWithoutFeedback>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}>
              <AntDesign name="ellipsis1" size={20} color={Colors.gray} />
            </View>
          </TouchableWithoutFeedback>
        </NeomorphBlur>
      </View>

      {/* Quran list  */}

      <View style={{flex: 1}}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={QuranList}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  marginHorizontal: 15,
                  padding: 5,
                  marginVertical: 5,
                }}>
                {selectedAudio.surah == item.surah ? (
                  //  AudiocurrentlyPlaying
                  <Neomorph
                    style={{
                      shadowRadius: 2,
                      borderRadius: 10,
                      backgroundColor: Colors.blue2,
                      width: phonewidth - 25,
                      height: 60,
                      padding: 8,
                      marginLeft: -10,
                    }}>
                    <View>
                      <TouchableWithoutFeedback
                        onPress={() => {
                          navigation.push('Player');
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                          }}>
                          <View style={{flex: 1}}>
                            <Text style={{color: Colors.dark}}>
                              {' '}
                              {item.surah}{' '}
                            </Text>
                            <Text style={{color: Colors.gray}}>
                              {item.reader}
                            </Text>
                          </View>

                          <NeomorphBlur
                            style={{
                              shadowRadius: 3,
                              borderRadius: 23,
                              backgroundColor: Colors.blue,
                              width: 45,
                              height: 45,
                            }}>
                            <TouchableWithoutFeedback
                              onPress={() => {
                                setselectedAudio({
                                  surah: '',
                                  reader: '',
                                });
                              }}>
                              <View
                                style={{
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flex: 1,
                                }}>
                                <AntDesign
                                  name="pause"
                                  size={18}
                                  color={'white'}
                                />
                              </View>
                            </TouchableWithoutFeedback>
                          </NeomorphBlur>
                        </View>
                      </TouchableWithoutFeedback>
                    </View>
                  </Neomorph>
                ) : (
                  //  not playing audio
                  <View style={{}}>
                    <TouchableWithoutFeedback
                      onPress={() => {
                        navigation.push('Player');
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                        }}>
                        <View style={{flex: 1}}>
                          <Text style={{color: Colors.dark}}>
                            {' '}
                            {item.surah}{' '}
                          </Text>
                          <Text style={{color: Colors.gray}}>
                            {item.reader}
                          </Text>
                        </View>
                        <NeomorphBlur
                          style={{
                            shadowRadius: 3,
                            borderRadius: 25,
                            backgroundColor: Colors.white,
                            width: 50,
                            height: 50,
                          }}>
                          <TouchableWithoutFeedback
                            onPress={() => {
                              console.log('PLAY ... ');
                              setselectedAudio({
                                surah: item.surah,
                                reader: item.reader,
                              });
                            }}>
                            <View
                              style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                flex: 1,
                              }}>
                              <AntDesign
                                name="caretright"
                                size={18}
                                color={Colors.gray}
                              />
                            </View>
                          </TouchableWithoutFeedback>
                        </NeomorphBlur>
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                )}
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}
