import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
export class SignIn extends React.Component {
  render() {
    return (
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', backgroundColor: '#0D0C40'}}>
        <View
          style={{
            width: '100%',
            height: '25%',
            justifyContent: 'center',
            margin: 20,
          }}>
          <Text style={{fontSize: 48, color: '#ffffff', fontWeight: 'bold'}}>
            Добро{'\n'}пожаловать
          </Text>
        </View>
        <View style={{backgroundColor: '#FFFFFF', height: '75%'}}>
          <View style={{margin: 30}}>
            <Text style={{fontWeight: 'bold', marginBottom: 40}}>
              Регистрация
            </Text>
            <Text style={{color: '#444444', fontSize: 14}}>Телефон</Text>
            <TextInput
              keyboardType={'phone-pad'}
              style={{borderBottomWidth: 0.5, height: 40}}
            />
            <Text style={{color: '#444444', fontSize: 14, marginTop: 25}}>
              Код подтверждения
            </Text>
            <TextInput
              keyboardType={'number-pad'}
              style={{borderBottomWidth: 0.5, height: 40}}
            />
            <TouchableOpacity
              onPress={() => Actions.profile()}
              style={{
                width: '100%',
                backgroundColor: '#0D0C40',
                justifyContent: 'center',
                alignItems: 'center',
                height: 60,
                borderRadius: 10,
                marginTop: 100,
              }}>
              <Text style={{color: '#FFFFFF'}}>Войти</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Actions.profile()}
              style={{
                width: '100%',
                backgroundColor: '#0D0C40',
                justifyContent: 'center',
                alignItems: 'center',
                height: 60,
                borderRadius: 10,
                marginTop: 10,
              }}>
              <Text style={{color: '#FFFFFF'}}>Войти с помощью ЕГАИС</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Actions.profile()}
              style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                height: 60,
                borderRadius: 10,
              }}>
              <Text style={{color: '#0D0C40'}}>Пропустить</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
