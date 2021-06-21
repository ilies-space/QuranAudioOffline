import React from 'react';
import {View, Text} from 'react-native';
import PlayList from './app/screens/PlayList';
import Player from './app/screens/Player';
export default function App() {
  return <View>{false ? <Player /> : <PlayList />}</View>;
}
