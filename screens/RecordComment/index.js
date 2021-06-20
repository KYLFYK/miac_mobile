import React, {Component} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class RecordComment extends Component {
  constructor(props) {
    //alert(JSON.stringify(props.navigation.state.params))
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{justifyContent: 'center', backgroundColor: '#fff'}}>
        <TouchableOpacity onPress={() => Actions.pop()}>
          <View style={{width: 50, height: 50, margin: 20}}>
            <Image source={require('../../source/images/back.png')} />
          </View>
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            margin: 20,
          }}>
          <Text>Общее самочувствие</Text>
          <View style={{justifyContent: 'flex-start', flexDirection: 'row'}}>
            <TouchableOpacity style={{margin: 20}}>
              <Image source={require('../../source/images/smile.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={{margin: 20}}>
              <Image source={require('../../source/images/smile.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={{margin: 20}}>
              <Image source={require('../../source/images/smile.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            margin: 20,
          }}>
          <Text>Физические нагрузки</Text>
          <View style={{justifyContent: 'flex-start', flexDirection: 'row'}}>
            <TouchableOpacity style={{margin: 20}}>
              <Image source={require('../../source/images/smile.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={{margin: 20}}>
              <Image source={require('../../source/images/smile.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={{margin: 20}}>
              <Image source={require('../../source/images/smile.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            margin: 20,
          }}>
          <Text>Прием лекарств</Text>
          <View style={{justifyContent: 'flex-start', flexDirection: 'row'}}>
            <TouchableOpacity style={{margin: 20}}>
              <Image source={require('../../source/images/smile.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={{margin: 20}}>
              <Image source={require('../../source/images/smile.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={{margin: 20}}>
              <Image source={require('../../source/images/smile.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            margin: 20,
          }}>
          <Text>Стресс</Text>
          <View style={{justifyContent: 'flex-start', flexDirection: 'row'}}>
            <TouchableOpacity style={{margin: 20}}>
              <Image source={require('../../source/images/smile.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={{margin: 20}}>
              <Image source={require('../../source/images/smile.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={{margin: 20}}>
              <Image source={require('../../source/images/smile.png')} />
            </TouchableOpacity>
          </View>
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
            onPress={() => Actions.recordList()}>
            <Text style={{color: '#ffffff', fontSize: 22}}>Записать</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
