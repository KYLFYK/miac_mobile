import React, {Component} from 'react';
import {
  Dimensions,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default class Record extends Component {
  WWidth = Dimensions.get('window').width;
  dilimetr = 15;
  ButtonHeight = 100;
  render() {
    return (
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', backgroundColor: '#0D0C40'}}>
        <View
          style={{
            width: '100%',
            height: '20%',
            justifyContent: 'center',
            margin: 20,
          }}>
          <Text
            style={{
              fontSize: 48,
              color: '#ffffff',
              fontWeight: 'bold',
              marginTop: 50,
            }}>
            Замеры
          </Text>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <TextInput
              style={{
                width: this.WWidth / this.dilimetr,
                height: 50,
                borderBottomColor: '#dddddd',
                borderBottomWidth: 2,
                margin: 3,
              }}
              editable={false}
            />
            <TextInput
              style={{
                width: this.WWidth / this.dilimetr,
                height: 50,
                borderBottomColor: '#dddddd',
                borderBottomWidth: 2,
                margin: 3,
              }}
              editable={false}
            />
            <TextInput
              style={{
                width: this.WWidth / this.dilimetr,
                height: 50,
                borderBottomColor: '#dddddd',
                borderBottomWidth: 2,
                margin: 3,
              }}
              editable={false}
            />
            <View style={{width: this.WWidth / this.dilimetr}}>
              <Text
                style={{color: '#dddddd', fontSize: 50, textAlign: 'center'}}>
                /
              </Text>
            </View>
            <TextInput
              style={{
                width: this.WWidth / this.dilimetr,
                height: 50,
                borderBottomColor: '#dddddd',
                borderBottomWidth: 2,
                margin: 3,
              }}
              editable={false}
            />
            <TextInput
              style={{
                width: this.WWidth / this.dilimetr,
                height: 50,
                borderBottomColor: '#dddddd',
                borderBottomWidth: 2,
                margin: 3,
              }}
              editable={false}
            />
            <TextInput
              style={{
                width: this.WWidth / this.dilimetr,
                height: 50,
                borderBottomColor: '#dddddd',
                borderBottomWidth: 2,
                margin: 3,
              }}
              editable={false}
            />
            <View style={{width: this.WWidth / this.dilimetr}}>
              <Text
                style={{
                  color: '#dddddd',
                  fontSize: 50,
                  textAlign: 'center',
                }}
              />
            </View>
            <TextInput
              style={{
                width: this.WWidth / this.dilimetr,
                height: 50,
                borderBottomColor: '#dddddd',
                borderBottomWidth: 2,
                margin: 3,
              }}
              editable={false}
            />
            <TextInput
              style={{
                width: this.WWidth / this.dilimetr,
                height: 50,
                borderBottomColor: '#dddddd',
                borderBottomWidth: 2,
                margin: 3,
              }}
              editable={false}
            />
            <TextInput
              style={{
                width: this.WWidth / this.dilimetr,
                height: 50,
                borderBottomColor: '#dddddd',
                borderBottomWidth: 2,
                margin: 3,
              }}
              editable={false}
            />
          </View>
        </View>
        <View style={{backgroundColor: '#FFFFFF', height: '95%'}}>
          <View
            style={{
              margin: 20,
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                width: this.WWidth / 3.5,
                height: this.ButtonHeight,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{textAlign: 'center', fontSize: 22}}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: this.WWidth / 3.5,
                height: this.ButtonHeight,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{textAlign: 'center', fontSize: 22}}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: this.WWidth / 3.5,
                height: this.ButtonHeight,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{textAlign: 'center', fontSize: 22}}>3</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              margin: 20,
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                width: this.WWidth / 3.5,
                height: this.ButtonHeight,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{textAlign: 'center', fontSize: 22}}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: this.WWidth / 3.5,
                height: this.ButtonHeight,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{textAlign: 'center', fontSize: 22}}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: this.WWidth / 3.5,
                height: this.ButtonHeight,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{textAlign: 'center', fontSize: 22}}>6</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              margin: 20,
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                width: this.WWidth / 3.5,
                height: this.ButtonHeight,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{textAlign: 'center', fontSize: 22}}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: this.WWidth / 3.5,
                height: this.ButtonHeight,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{textAlign: 'center', fontSize: 22}}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: this.WWidth / 3.5,
                height: this.ButtonHeight,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{textAlign: 'center', fontSize: 22}}>9</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              margin: 20,
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                width: this.WWidth / 3.5,
                height: this.ButtonHeight,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{textAlign: 'center', fontSize: 22}}>DEL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: this.WWidth / 3.5,
                height: this.ButtonHeight,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{textAlign: 'center', fontSize: 22}}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: this.WWidth / 3.5,
                height: this.ButtonHeight,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{textAlign: 'center', fontSize: 22}}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
