import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
export default class SplashScreen extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <SafeAreaView>
        <View style={{justifyContent: 'space-between', alignItems: 'center', marginTop: '40%', marginBottom: 100}}>
          <Image source={require('../../source/images/logo.png')} />
        </View>

        <View style={{margin: 25}}>
          <Text
            style={{
              fontSize: 32,
              color: '#0D0C40',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Журнал измерения АД всегда под рукой
          </Text>
        </View>
        <View style={{margin: 20, justifyContent: 'flex-end', height: '20%'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#0D0C40',
              borderRadius: 10,
              width: '100%',
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 20,
            }}
            onPress={() => Actions.signin()}>
            <Text style={{color: '#ffffff', fontSize: 22}}>Подробнее</Text>
          </TouchableOpacity>
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
            <Text style={{color: '#5956E9', fontSize: 22}}>Проупустить</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
