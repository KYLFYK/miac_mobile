import React, {Component} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import moment from 'moment';
import {Actions} from 'react-native-router-flux';

export default class RecordDetail extends Component {
  constructor(props) {
    //alert(JSON.stringify(props.navigation.state.params))
    super(props);
  }
  state = {};
  componentDidMount() {
    const data = this.props.navigation.state.params;
    this.setState({
      name: data.owner.firstName,
      sys: data.sys,
      dia: data.dia,
      heartRate: data.heartRate,
      date: moment(data.createdAt).format('yyyy-mm-DD'),
      time: moment(data.createdAt).format('HH:mm'),
    })
  }

  render() {
    return (
      <SafeAreaView
        style={{justifyContent: 'center', backgroundColor: '#fff'}}>
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
          <Text>Имя</Text>
          <Text style={{fontWeight:'bold'}}>{this.state.name}</Text>
          <Text>Систолическое давление</Text>
          <Text style={{fontWeight:'bold'}}>{this.state.sys}</Text>
          <Text>Диастолическое давление</Text>
          <Text style={{fontWeight:'bold'}}>{this.state.dia}</Text>
          <Text>Сердечный ритм</Text>
          <Text style={{fontWeight:'bold'}}>{this.state.heartRate}</Text>
          <Text>Дата замера</Text>
          <Text style={{fontWeight:'bold'}}>{this.state.date}</Text>
          <Text>Время замера</Text>
          <Text style={{fontWeight:'bold'}}>{this.state.time}</Text>
        </View>
      </SafeAreaView>
    );
  }
}
