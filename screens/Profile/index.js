import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {Actions} from 'react-native-router-flux';

export class Profile extends React.Component {
  render() {
    return (
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', backgroundColor: '#0D0C40'}}>
        <View
          style={{
            width: '100%',
            height: '10%',
            justifyContent: 'center',
            margin: 20,
          }}>
          <Text style={{fontSize: 48, color: '#ffffff', fontWeight: 'bold'}}>
            Профиль
          </Text>
        </View>
        <View style={{backgroundColor: '#FFFFFF', height: '95%'}}>
          <View style={{margin: 30}}>
            <Text style={{color: '#444444', fontSize: 14}}>Имя</Text>
            <TextInput
              keyboardType={'default'}
              style={{borderBottomWidth: 0.5, height: 40}}
            />
            <Text style={{color: '#444444', fontSize: 14}}>Фамилия</Text>
            <TextInput
              keyboardType={'default'}
              style={{borderBottomWidth: 0.5, height: 40}}
            />
            <Text style={{color: '#444444', fontSize: 14}}>Возраст</Text>
            <TextInput
              keyboardType={'phone-pad'}
              style={{borderBottomWidth: 0.5, height: 40}}
            />
            <Text style={{color: '#444444', fontSize: 14}}>Пол</Text>
            <RNPickerSelect
              onValueChange={value => console.log(value)}
              title={'Ваш пол'}
              items={[
                {label: 'Муж.', value: 'male'},
                {label: 'Жен.', value: 'female'},
              ]}
              style={{borderBottomWidth: 0.5, height: 100, marginBottom: 20}}
            />
            <Text style={{color: '#444444', fontSize: 14, marginTop: 20}}>
              Телефон
            </Text>
            <TextInput
              keyboardType={'phone-pad'}
              style={{borderBottomWidth: 0.5, height: 40}}
            />
            <TouchableOpacity
              onPress={() => Actions.record()}
              style={{
                width: '100%',
                backgroundColor: '#0D0C40',
                justifyContent: 'center',
                alignItems: 'center',
                height: 60,
                borderRadius: 10,
                marginTop: 100,
              }}>
              <Text style={{color: '#FFFFFF'}}>Сохранить</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
