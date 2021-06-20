import React from 'react';
import {Provider} from 'react-redux';
import {Router, Scene} from 'react-native-router-flux';

import SplashScreen from './screens/SplashScreen';
import {SignIn} from './screens/SignIn';
import {Profile} from './screens/Profile';
import Record from './screens/Record';
import RecordList from './screens/RecordList';
import RecordDetail from './screens/RecordDetail';
import RecordComment from './screens/RecordComment';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key={'root'}>
          <Scene
            key={'splash'}
            component={SplashScreen}
            title={'Splash'}
            initial
            hideNavBar
          />
          <Scene
            key={'signin'}
            component={SignIn}
            title={'SignIn'}
            hideNavBar
          />
          <Scene
            key={'profile'}
            component={Profile}
            title={'Profile'}
            hideNavBar
          />
          <Scene
            key={'record'}
            component={Record}
            title={'Record'}
            hideNavBar
          />
          <Scene
            key={'recordList'}
            component={RecordList}
            title={'RecordList'}
            hideNavBar
          />
          <Scene
            key={'recordDetail'}
            component={RecordDetail}
            title={'RecordDetail'}
            hideNavBar
          />
          <Scene
            key={'recordComment'}
            component={RecordComment}
            title={'RecordComment'}
            hideNavBar
          />
        </Scene>
      </Router>
    );
  }
}
