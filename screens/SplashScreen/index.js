import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
export default class SplashScreen extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <SafeAreaView>
        <View style={{margin: 25}}>
          <Text
            style={{
              fontSize: 48,
              color: '#0D0C40',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Кардио{'\n'}Журнал{'\n'}
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '55%',
          }}>
          <Text style={{height: 500}} />
        </View>
        <View style={{margin: 20, justifyContent: 'flex-end', height: '10%'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 10,
              width: '100%',
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => Actions.signin()}>
            <Text style={{color: '#5956E9', fontSize: 22}}>Начать</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
