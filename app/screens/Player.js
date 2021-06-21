import React from 'react';
import {View, Text, Button} from 'react-native';
export default function Player() {
  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'row',
          margin: 10,
        }}>
        <Button title={'return'} />
        <Text>Playing Now</Text>

        <Button title={'Menu'} />
      </View>

      {/* Audio INFO  */}

      <View style={{alignItems: 'center'}}>
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
        <Text>TITLE</Text>
        <Text>Reader</Text>
      </View>

      {/* space  */}
      <View style={{marginVertical: 10}} />

      {/* Progress  */}

      <View style={{alignItems: 'center'}}>
        <View
          style={{
            height: 10,
            width: '80%',
            backgroundColor: 'gray',
            borderRadius: 10,
          }}
        />
      </View>

      {/* space  */}
      <View style={{marginVertical: 10}} />

      {/* Controller */}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Button title={'Previews'} />
        <Button title={'play'} />
        <Button title={'Next'} />
      </View>
    </View>
  );
}
