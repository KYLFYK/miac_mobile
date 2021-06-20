import React, {Component} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import TabNavigator from 'react-native-tab-navigator';
import axios from 'axios';
import moment from 'moment';
export default class RecordList extends Component {
  state = {
    selectedTab: 'home',
    items: [],
  };
  list = [
    {
      name: '123',
      sys: 120,
      dia: 80,
      heartRate: 87,
      date: '19-06-2021',
      time: '8:00',
      description: 'В состоянии покоя',
    },
    {
      name: '123',
      sys: 128,
      dia: 99,
      heartRate: 120,
      date: '19-06-2021',
      time: '10:00',
      description: 'После пробежки',
    },
    {
      name: '123',
      sys: 128,
      dia: 99,
      heartRate: 80,
      date: '19-06-2021',
      time: '10:00',
      description: 'После пробежки',
    },
    {
      name: '123',
      sys: 110,
      dia: 70,
      heartRate: 144,
      date: '19-06-2021',
      time: '10:00',
      description: 'После пробежки',
    },
    {
      name: '123',
      sys: 120,
      dia: 99,
      heartRate: 76,
      date: '19-06-2021',
      time: '10:00',
      description: 'После пробежки',
    },
    {
      name: '123',
      sys: 140,
      dia: 99,
      heartRate: 120,
      date: '19-06-2021',
      time: '10:00',
      description: 'После пробежки',
    },
  ];
  componentDidMount() {
    axios.get('http://77.222.52.193:3005/records?skip=0&take=20').then(item => {
      // alert(JSON.stringify(item.data.items));
      this.setState({items: item.data.items});
    });
  }

  render() {
    return (
      <SafeAreaView
        style={{justifyContent: 'center', backgroundColor: '#0D0C40'}}>
        <View
          style={{
            width: '100%',
            height: '10%',
            justifyContent: 'center',
            margin: 20,
          }}>
          <Text style={{fontSize: 42, color: '#ffffff', fontWeight: 'bold'}}>
            Журнал записей
          </Text>
        </View>
        <ScrollView style={{height: '100%', backgroundColor: '#FFFFFF'}}>
          {this.state.items.map((item, key) => {
            return (
              <TouchableOpacity
                key={key}
                style={{
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 10,
                  flex: 1,
                  flexDirection: 'row',
                }}
                onPress={() => Actions.recordDetail(item)}>
                <View style={{width: 10, backgroundColor: '#dd00dd'}} />
                <View style={{flex: 1, flexDirection: 'column'}}>
                  <View>
                    <Text style={{marginLeft: 20, marginTop: 5, fontSize: 12}}>
                      Дата: {moment(item.createdAt).format('yyyy-mm-dd')} / время: {moment(item.time).format('HH:mm')}
                    </Text>
                  </View>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View
                      style={{
                        margin: 20,
                      }}>
                      <Text style={{textAlign: 'center'}}>SYS: {item.sys}</Text>
                    </View>
                    <View
                      style={{
                        margin: 20,
                      }}>
                      <Text style={{textAlign: 'center'}}>DIA: {item.dia}</Text>
                    </View>
                    <View
                      style={{
                        margin: 20,
                      }}>
                      <Text style={{textAlign: 'center'}}>
                        HEART RATE: {item.heartRate}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
